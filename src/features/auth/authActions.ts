import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
// import { toast } from "react-hot-toast";

const url = "https://ohms-api.fly.dev";

interface typeDataAdmin {
  token: string;
  role: string;
  data: {
    _id: string;
    token: string;
    role: string;
  };
  // Add other properties from the `data` object
}

interface typeDataUser {
  token: string;
  role: string;
  data: {
    _id: string;
    token: string;
    role: string;
  };
  // Add other properties from the `data` object
}

interface LoginCredentialsAdmin {
  email: string;
  password: string;
}

interface LoginCredentialsUser {
  email: string;
  password: string;
}

export const authLogin = createAsyncThunk<typeDataAdmin, LoginCredentialsAdmin>(
  "/auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<typeDataAdmin> = await axios.post(
        `${url}/auth/login`,
        { email: email, password: password },
        config
      );

      console.log(data.data);

      localStorage.setItem("tokenOHMS", data.data.token);
      localStorage.setItem("infoOHMS", JSON.stringify(data.data));
      localStorage.setItem("roleOHMS", data.data.role);
      localStorage.setItem("idOHMS", data.data._id);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // toast.error(error.response?.data);
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
      }

      return rejectWithValue((error as AxiosError<SerializedError>).message);
    }
  }
);

// export const userLogin = createAsyncThunk<typeDataUser, LoginCredentialsUser>(
//   "/auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const { data }: AxiosResponse<typeDataUser> = await axios.post(
//         `${url}/auth/login`,
//         { email, password },
//         config
//       );

//       if (data.data.role === "user") {
//         localStorage.setItem("userTokenOHMS", data.data.token);
//         localStorage.setItem("userInfoOHMS", JSON.stringify(data.data));
//       }

//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         toast.error(error.response?.data);
//         if (error.response && error.response.data.message) {
//           return rejectWithValue(error.response.data.message);
//         }
//       }

//       return rejectWithValue((error as AxiosError<SerializedError>).message);
//     }
//   }
// );
