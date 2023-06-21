import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { userLogin } from "./authActions";

interface AuthStateUser {
  loading: boolean;
  userInfo: any;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

// Get the admin token from local storage
const userToken = localStorage.getItem("tokenOHMS");

const initialStateUser: AuthStateUser = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    // Logout the admin by removing their token and info from local storage
    logout: (stateUser) => {
      localStorage.removeItem("userTokenOHMS");
      localStorage.removeItem("userInfoOHMS");
      stateUser.loading = false;
      stateUser.userInfo = null;
      stateUser.userToken = null;
      stateUser.error = null;
    },
    // Set the admin credentials in the stateUser
    setCredentialsUser: (stateUser, { payload }: PayloadAction<any>) => {
      stateUser.userInfo = payload;
    },
  },

  // Handle extra reducers for async actions
  extraReducers: (builder) => {
    // builder
    //   .addCase(userLogin.pending, (stateUser) => {
    //     stateUser.loading = true;
    //     stateUser.error = null;
    //   })
    //   .addCase(userLogin.fulfilled, (stateUser, { payload }) => {
    //     stateUser.loading = false;
    //     stateUser.userInfo = payload.data;
    //     stateUser.userToken = payload.data.token;
    //     // stateUser.success = true;
    //   })
    //   .addCase(userLogin.rejected, (stateUser, { payload }) => {
    //     stateUser.loading = false;
    //     stateUser.error = payload as any;
    //   });
  },
});

export const { logout: logoutUser } = userSlice.actions;

export default userSlice.reducer;
