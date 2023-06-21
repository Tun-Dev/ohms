import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ohms-api.fly.dev",
    prepareHeaders: (headers, {}) => {
      const token = localStorage.getItem("adminTokenOHMS");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: () => ({
        url: "/application",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDetailsQuery } = adminApi;
