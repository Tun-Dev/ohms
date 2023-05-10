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
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </>
  );
};

const UserAuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.userbody}>
        <div className={styles.userleft}>
          <Sidebar />
        </div>
        <div className={styles.userright}>
          <div>
            <Navbar />
          </div>
          <div className={styles.userchildren}>{children}</div>
        </div>
      </div>
    </>
  );
};

export { AuthLayout, UserAuthLayout };
