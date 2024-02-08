import React, { useEffect } from "react";
import { Navbar, Sidebar } from "layout/SubComponent";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "services/store";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = () => {
  const { authRole, authToken } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // if (authRole !== "admin" || !authToken) {
    //   navigate("/admin");
    // }
  }, [navigate, authRole]);
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
          <div className={styles.children}>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className={styles.body__mobile}>
        <div className={styles.body__mobile__inner}>
          <div>
            <Navbar />
          </div>
          <div className={styles.bodychildren}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const UserAuthLayout = () => {
  const { authRole, authToken } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // if (authRole !== "user" || !authToken) {
    //   navigate("/");
    // }
  }, [navigate, authRole]);
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
          <div className={styles.userchildren}>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Mobile UserLayout */}

      <div className={styles.userbody__mobile}>
        <div className={styles.userbody__mobile__inner}>
          <div>
            <Navbar />
          </div>
          <div className={styles.userchildren}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export { AuthLayout, UserAuthLayout };
