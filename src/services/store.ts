import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { adminApi } from "./auth/authService";
// Authreducer acts as on reducer from the two in the authSlice.ts file
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/auth/userSlice";

// const reducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
// });

const store = configureStore({
  reducer: {
    auth: authReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
