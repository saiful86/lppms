import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

// const NAV_URL = "/ReadAllMenuss";

const navApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all nav
    manuProps: build.query({
      query: (arg: Record<string, any>) => ({
        url: NAV_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.nav],
    }),
  }),
});

export const { useManuPropsQuery } = navApi;
