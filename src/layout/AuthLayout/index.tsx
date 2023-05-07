import React from "react";
import { Navbar, Sidebar } from "layout/SubComponent";
import styles from "./styles.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        <div className={styles.right}>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export { AuthLayout };
