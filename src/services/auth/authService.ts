import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ohms-api.fly.dev",
    prepareHeaders: (headers, {}) => {
      const token = localStorage.getItem("tokenOHMS");
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
    addComplaint: build.mutation({
      query: ({ data }) => ({
        url: "/complaint",
        method: "POST",
        body: data,
      }),
    }),

    // For Admins
    getApplications: build.query<void, void>({
      query: () => ({
        url: "/application/",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetDetailsQuery,
  useAddComplaintMutation,
  useGetApplicationsQuery,
} = adminApi;
