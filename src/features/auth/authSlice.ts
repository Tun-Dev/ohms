import { createSlice, PayloadAction, combineReducers } from "@reduxjs/toolkit";
import { authLogin } from "./authActions";

// Define the shape of the authentication state
interface AuthStateAdmin {
  loading: boolean;
  authInfo: any | null;
  authToken: string | null;
  authRole: string | null;
  error: string | null;
  success: boolean;
}

// Get the admin token from local storage
const authToken = localStorage.getItem("tokenOHMS");
const authRole = localStorage.getItem("roleOHMS");
const authInfo = localStorage.getItem("infoOHMS");

// Define the initial state of the authentication slice
const initialStateAdmin: AuthStateAdmin = {
  loading: false,
  authInfo: authInfo ? JSON.parse(authInfo) : null,
  authToken,
  authRole,
  error: null,
  success: false,
};

// Create the authentication slice
const authSlice = createSlice({
  name: "user",
  initialState: initialStateAdmin,
  reducers: {
    // Logout the admin by removing their token and info from local storage
    logout: (state) => {
      localStorage.removeItem("tokenOHMS");
      localStorage.removeItem("infoOHMS");
      localStorage.removeItem("roleOHMS");
      state.loading = false;
      state.authInfo = null;
      state.authToken = null;
      state.authRole = null;
      state.error = null;
    },
    // Set the admin credentials in the state
    setCredentialsAdmin: (state, { payload }: PayloadAction<any>) => {
      state.authInfo = payload;
    },
  },

  // Handle extra reducers for async actions
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authInfo = payload.data;
        state.authRole = payload.data.role;
        state.authToken = payload.data.token;
      })
      .addCase(authLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as any;
      });
  },
});

// Export the authentication slice actions
export const { logout } = authSlice.actions;

// Export the authentication slice reducer
// Ths is the reducer that will be added to the Redux store, and will handle all authentication actions, exported a stwo different reducers
export default authSlice.reducer;
