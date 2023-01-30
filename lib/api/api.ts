import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../config/constants";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    }
  }),
  tagTypes: [
    "Auth",
  ],
  endpoints: () => ({})
});
