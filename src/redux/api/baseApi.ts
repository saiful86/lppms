import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { axiosBaseQuery } from "../../helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "../../helpers/config/envConfig";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});



