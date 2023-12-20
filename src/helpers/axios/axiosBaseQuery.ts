import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance } from "./axiosInstance";

type MyResponse = { data: any } | { error: { status: number; data: any } };

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      contentType?: string;
    },
    MyResponse,
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await instance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Credentials": true,
          "Content-Type":"application/json"
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
