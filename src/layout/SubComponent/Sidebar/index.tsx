import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  OHMSLogoADIcon,
  DashboardIcon,
  ApplicationIcon,
  ComplaintsIcon,
  InventoryIcon,
  LogoutIcon,
  HotelSlipIcon,
} from "assets";
import { routes } from "utils";
import { logout } from "features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "services/store";

const adminMenuItems = [
  { name: "Dashboard", href: routes.admindashboard, src: <DashboardIcon /> },
  {
    name: "Applications",
    href: routes.adminapplication,
    src: <ApplicationIcon />,
  },
  { name: "Complaints", href: routes.admincomplaint, src: <ComplaintsIcon /> },
  { name: "Inventory", href: routes.admininventory, src: <InventoryIcon /> },
];

const userMenuItems = [
  { name: "Dashboard", href: routes.userdashboard, src: <DashboardIcon /> },
  {
    name: "Applications",
    href: routes.userapplication,
    src: <ApplicationIcon />,
  },
  {
    name: "Hostel Slip",
    href: routes.userconfirmation,
    src: <HotelSlipIcon />,
  },
  { name: "Complaint", href: routes.usercomplaint, src: <ComplaintsIcon /> },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [border, setBorder] = useState(false);

  useEffect(() => {
    if (!window.location.pathname.startsWith("/admin")) {
      setBorder(true);
    }
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const LogOut = () => {
    dispatch(logout());
    navigate("/admin");
  };

  return (
    <>
      <div className={`${styles.sidebar}  ${border ? styles.border : ""}`}>
        <div className={styles.sidebar__top}>
          <OHMSLogoADIcon />
        </div>
        <div className={styles.sidebar__linkscon}>
          {border
            ? userMenuItems.length > 0 &&
              userMenuItems.map((item, index) => (
                <div
                  key={index}
                  role="button"
                  // onClick={() => push(link)}
                  onClick={() => {
                    // console.log(link);
                    navigate(item.href);
                  }}
                  id={
                    window.location.pathname === item.href ? styles.active : ""
                  }
                  className={styles.menu}
                >
                  <div className={styles.menuinner}>
                    <div className={styles.icons}>
                      {item.src}
                      {/* <Icon className={styles.icon} /> */}
                    </div>
                    <span>{item.name}</span>
                  </div>
                </div>
              ))
            : adminMenuItems.length > 0 &&
              adminMenuItems.map((item, index) => (
                <div
                  key={index}
                  role="button"
                  // onClick={() => push(link)}
                  onClick={() => {
                    // console.log(link);
                    navigate(item.href);
                  }}
                  id={
                    window.location.pathname === item.href ? styles.active : ""
                  }
                  className={styles.menu}
                >
                  <div className={styles.menuinner}>
                    <div className={styles.icons}>
                      {item.src}
                      {/* <Icon className={styles.icon} /> */}
                    </div>
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
        </div>
        <div className={styles.sidebar__logout}>
          <div
            role="button"
            // onClick={() => push(link)}
            onClick={() => {
              // console.log(link);
              // navigate(item.href);
            }}
            // id={window.location.pathname === item.href ? styles.active : ""}
            className={styles.menu}
          >
            <div
              onClick={() => {
                // localStorage.removeItem("token");
                if (window.location.pathname.startsWith("/admin")) {
                  LogOut();
                } else {
                  navigate("/");
                }
              }}
              className={styles.menuinner}
            >
              <div className={styles.icons}>
                <LogoutIcon />
                {/* <Icon className={styles.icon} /> */}
              </div>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
