// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const url = "https://svp.hypen.blog";

// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export const adminLogin = createAsyncThunk<LoginCredentials>(
//   "/auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         `${url}/auth/login`,
//         { email, password },
//         config
//       );

//       localStorage.setItem("adminToken", data.token);
//       localStorage.setItem("adminInfo", JSON.stringify(data));

//       return data;
//     } catch (error) {
//       toast.error(error.response.data);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

const url = "https://svp.hypen.blog";

interface AdminData {
  token: string;
  // Add other properties from the `data` object
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const adminLogin = createAsyncThunk<AdminData, LoginCredentials>(
  "/auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<AdminData> = await axios.post(
        `${url}/auth/login`,
        { email, password },
        config
      );

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminInfo", JSON.stringify(data));

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
      }

      return rejectWithValue((error as AxiosError<SerializedError>).message);
    }
  }
);