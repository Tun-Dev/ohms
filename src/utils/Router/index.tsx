// import React from "react";
// import { routes } from "utils/Routes";
// import { UnAuthLayout, AuthLayout, UserAuthLayout } from "layout";
// import {
//   AdminDashboard,
//   AdminApplication,
//   AdminComplaints,
//   AdminInventory,
//   UserLogin,
//   AdminLogin,
//   UserApplication,
//   UserCompliant,
//   UserDashboard,
//   UserHostelSlip,
// } from "pages";

// interface router {
//   path: string;
//   Component: React.FC;
//   Layout: React.ComponentType<any>;
// }

// export const Router: router[] = [
//   // Landing page
//   {
//     path: routes.userlogin,
//     Component: UserLogin,
//     Layout: UnAuthLayout,
//   },
//   {
//     path: routes.adminlogin,
//     Component: AdminLogin,
//     Layout: UnAuthLayout,
//   },

//   //   Admin Dashboard
//   {
//     path: routes.admindashboard,
//     Component: AdminDashboard,
//     Layout: AuthLayout,
//   },
//   {
//     path: routes.admincomplaint,
//     Component: AdminComplaints,
//     Layout: AuthLayout,
//   },
//   {
//     path: routes.adminapplication,
//     Component: AdminApplication,
//     Layout: AuthLayout,
//   },
//   {
//     path: routes.admininventory,
//     Component: AdminInventory,
//     Layout: AuthLayout,
//   },

//   // User Dashboard
//   {
//     path: routes.userdashboard,
//     Component: UserDashboard,
//     Layout: UserAuthLayout,
//   },
//   {
//     path: routes.userapplication,
//     Component: UserApplication,
//     Layout: UserAuthLayout,
//   },
//   {
//     path: routes.usercomplaint,
//     Component: UserCompliant,
//     Layout: UserAuthLayout,
//   },
//   {
//     path: routes.userconfirmation,
//     Component: UserHostelSlip,
//     Layout: UserAuthLayout,
//   },
// ];
