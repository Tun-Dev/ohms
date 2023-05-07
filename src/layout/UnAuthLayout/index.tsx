import React from "react";

interface UnAuthLayoutProps {
  children?: React.ReactNode;
}

const UnAuthLayout = ({ children }: UnAuthLayoutProps): JSX.Element => {
  return <>{children}</>;
};

export { UnAuthLayout };
