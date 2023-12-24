import { tagTypes } from "../../tag-types";
import { baseApi } from "../baseApi";

export const transTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all  plans
    getAllPlans: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/api/test/plans`,
        method: "GET",
        params: arg,
        // params: {
        //   pageNo: arg.page !== undefined ? arg.page : 0,
        //   pageSize: arg.size !== undefined ? arg.size : 10,
        //   filter: arg.filter || '',
        //   dbFieldName: arg.dbFieldName,
        //   sortDirection: arg.sortDirection
        // },
      }),
      providesTags: [tagTypes.plans],
    }),
    // create a new vat rebate type
    addMaterialData: build.mutation({
      query: (data) => ({
        url: "/api/test/addPlan",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.plans],
    }),

    // get single transaction
    getSingleTransaction: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/setting/api/v1/tran-type/find/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.plans],
    }),
    // create a new transaction
    addTransaction: build.mutation({
      query: (data) => ({
        url: "/setting/api/v1/tran-type/add",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.plans],
    }),
    // update ac department
    updateTransaction: build.mutation({
      query: (data) => ({
        url: `/setting/api/v1/tran-type/update/${data.id}`,
        method: "PUT",
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.plans],
    }),
  }),
});

export const {
  useGetAllPlansQuery,
  useAddMaterialDataMutation,
  useGetSingleTransactionQuery,
  useAddTransactionMutation,
  useUpdateTransactionMutation,
} = transTypeApi;
