import React from "react";
import { Outlet } from "react-router-dom";

interface UnAuthLayoutProps {
  children?: React.ReactNode;
}

const UnAuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export { UnAuthLayout };
