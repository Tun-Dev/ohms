import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "error-page";
import { UnAuthLayout, AuthLayout, UserAuthLayout } from "layout";
// import { UserAuthLayout } from "layout";
import {
  AdminLogin,
  UserLogin,
  AdminApplication,
  AdminDashboard,
  AdminComplaints,
  AdminInventory,
  UserDashboard,
  UserApplication,
  UserCompliant,
  UserHostelSlip,
} from "pages";
// import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "services/store";
import { Provider } from "react-redux";
import "./index.scss";

// New React Router codes
const router = createBrowserRouter([
  {
    path: "/",
    element: <UnAuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <UserLogin /> },
      { path: "/admin", element: <AdminLogin /> },
    ],
  },
  {
    path: "/admin",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/application", element: <AdminApplication /> },
      { path: "/admin/complaint", element: <AdminComplaints /> },
      { path: "/admin/inventory", element: <AdminInventory /> },
    ],
  },
  {
    path: "/user",
    element: <UserAuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/user/dashboard", element: <UserDashboard /> },
      { path: "/user/application", element: <UserApplication /> },
      { path: "/user/confirmation", element: <UserHostelSlip /> },
      { path: "/user/complaint", element: <UserCompliant /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
