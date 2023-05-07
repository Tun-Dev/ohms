import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { AdminLoginUI, UserLoginUI } from "components";
import { ApplicationIcon, LogoutIcon } from "assets";
// import { ApplicationIcon } from "assets";

function App() {
  return (
    <>
      {/* <AdminLoginUI /> */}
      <UserLoginUI />
    </>
  );
}

export default App;
