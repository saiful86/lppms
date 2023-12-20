import { baseApi } from "./api/baseApi";
import receiveReducer from "./slices/apiSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  receive: receiveReducer,
};

