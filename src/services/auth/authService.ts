import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ApplicationDetail {
  // Define the properties and their types based on the data structure
  id: any;
  // ...
  // Other properties
}

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
    getUserProfile: build.query({
      query: ({ id }) => ({
        url: `/user/${id}/profile`,
        method: "GET",
      }),
    }),
    submitApplication: build.mutation({
      query: ({ data }) => ({
        url: "/application/create",
        method: "POST",
        body: data,
      }),
    }),
    uploadLetter: build.mutation<{}, FormData>({
      query: (data) => ({
        url: "/upload/letter",
        headers: { "Content-Type": "form-data" },
        method: "POST",
        body: data,
      }),
    }),
    uploadWapic: build.mutation({
      query: ({ data }) => ({
        url: "/upload/wapic",
        method: "POST",
        body: data,
      }),
    }),
    uploadHostelSlip: build.mutation({
      query: ({ data }) => ({
        url: "/upload/hostelSlip",
        method: "POST",
        body: data,
      }),
    }),
    uploadLagmobile: build.mutation({
      query: ({ data }) => ({
        url: "/upload/lagmobile",
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
    getAllCompliants: build.query<void, void>({
      query: () => ({
        url: "/complaint",
        method: "GET",
      }),
    }),
    getSpecificApplicationDetail: build.query<ApplicationDetail, { id: any }>({
      query: ({ id }) => ({
        url: `/application/${id}`,
        method: "GET",
      }),
    }),
    getRoomsInventory: build.query<void, void>({
      query: () => ({
        url: `/room/inventory`,
        method: "GET",
      }),
    }),
    getRooms: build.query<void, void>({
      query: () => ({
        url: `/room`,
        method: "GET",
      }),
    }),
    getSpecificRoom: build.query<ApplicationDetail, { id: any }>({
      query: ({ id }) => ({
        url: `/room/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetDetailsQuery,
  useAddComplaintMutation,
  useGetUserProfileQuery,
  useSubmitApplicationMutation,
  useUploadLetterMutation,
  useUploadWapicMutation,
  useUploadHostelSlipMutation,
  useUploadLagmobileMutation,

  useGetApplicationsQuery,
  useGetAllCompliantsQuery,
  useGetSpecificApplicationDetailQuery,
  useGetRoomsInventoryQuery,
  useGetRoomsQuery,
  useGetSpecificRoomQuery,
} = adminApi;
