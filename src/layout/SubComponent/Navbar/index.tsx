import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NotificationIcon } from "assets";
import { useLocation, useNavigate } from "react-router-dom";
// import { routes } from "utils";
// import use
import { routes } from "utils";

const userItemLayout = [
  {
    name: "Dashboard",
    href: "/user/dashboard",
    // src: Profile,
    alt: "Profile",
  },
  {
    name: "Application",
    href: "/user/application",
    // src: Discovery,
    alt: "Job listing",
  },
  {
    name: "Hostel Slip",
    href: "/user/confirmation",
    // src: TestIcon,
    alt: "Take test",
  },
  {
    name: "Compliant",
    href: "/user/complaint",
    // src: Settings,
    alt: "Settings",
  },
  {
    name: "Logout",
    href: "/",
    // src: Logout,
    alt: "Sign out",
  },
];

const adminItemLayout = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    // src: Profile,
    alt: "Profile",
  },
  {
    name: "Application",
    href: "/admin/application",
    // src: Discovery,
    alt: "Job listing",
  },
  {
    name: "Complaints",
    href: "/admin/complaint",
    // src: TestIcon,
    alt: "Take test",
  },
  {
    name: "Inventory",
    href: "/admin/inventory",
    // src: Settings,
    alt: "Settings",
  },
  {
    name: "Logout",
    href: "/admin",
    // src: Logout,
    alt: "Sign out",
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  // const router = useRouter();
  const [sideBar, serSideBar] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__wrapper}>
          <div className={styles.navbar__wrapper__words}>
            {window.location.pathname === routes.admindashboard ? (
              <>
                <h4>Hello Admin</h4>
                <h5>Let’s check your stats today</h5>
              </>
            ) : window.location.pathname === routes.adminapplication ? (
              <>
                <h4>Applications</h4>
                <h5>View all applications</h5>
              </>
            ) : window.location.pathname === routes.admincomplaint ? (
              <>
                <h4>User Complaints</h4>
                <h5> See complaints from users</h5>
              </>
            ) : window.location.pathname === routes.admininventory ? (
              <>
                <h4>Inventory</h4>
                <h5> Check out available rooms</h5>
              </>
            ) : null}

            {/* For users */}
            {window.location.pathname === routes.userdashboard ? (
              <>
                <h4>Welcome</h4>
                <h5>Here’s what we have for you today</h5>
              </>
            ) : window.location.pathname === routes.userapplication ? (
              <>
                <h4>Applications Corner</h4>
                <h5>Apply for hostels here</h5>
              </>
            ) : window.location.pathname === routes.userconfirmation ? (
              <>
                <h4>Hostel Confirmation</h4>
                <h5>Download your hostel confirmation slip here</h5>
              </>
            ) : window.location.pathname === routes.usercomplaint ? (
              <>
                <h4>Complaints</h4>
                <h5>Lodge a complaint to the admin</h5>
              </>
            ) : null}
          </div>
          <div className={styles.navbar__wrapper__notification}>
            <NotificationIcon />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.navbar__mobile}>
        <>
          {/* Navbar */}
          <div className={styles.navbar__mobile__inner}>
            <div className={styles.containerAuth}>
              <div className={styles.containerAuth__wrapper}>
                <div
                  className={styles.hamcon}
                  onClick={() => setActive(!active)}
                >
                  <div
                    className={
                      active ? styles.activeHamburger : styles.hamburger
                    }
                  />
                </div>
                <div className={styles.icon}>
                  <NotificationIcon />
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar intro */}

          <div className={active ? styles.activeSidenav : styles.sidenav}>
            {/* <div className="topcon">
                  <Image src={baiwaaLogoWhite} alt="Baiwaa Logo" />
                </div> */}
            <div className={styles.linkscon}>
              <ul>
                {window.location.pathname.startsWith("/user")
                  ? userItemLayout.map((menuItem, index) => (
                      <li
                        className={styles.links}
                        id={
                          location.pathname == menuItem.href
                            ? styles.active
                            : ""
                        }
                        key={index}
                      >
                        <div
                          onClick={() => {
                            setActive(!active);
                            navigate(menuItem.href);
                          }}
                        >
                          <a
                            className={styles.menu_item}
                            onClick={() => {
                              setActive(!active);
                            }}
                          >
                            <div>
                              {/* <Image src={menuItem.src} alt={menuItem.alt} /> */}
                            </div>
                            <span>{menuItem.name}</span>
                          </a>
                        </div>
                      </li>
                    ))
                  : adminItemLayout.map((menuItem, index) => (
                      <li
                        className={styles.links}
                        id={
                          location.pathname == menuItem.href
                            ? styles.active
                            : ""
                        }
                        key={index}
                      >
                        <div
                          onClick={() => {
                            setActive(!active);
                            navigate(menuItem.href);
                          }}
                        >
                          <a
                            className={styles.menu_item}
                            onClick={() => {
                              setActive(!active);
                            }}
                          >
                            <div>
                              {/* <Image src={menuItem.src} alt={menuItem.alt} /> */}
                            </div>
                            <span>{menuItem.name}</span>
                          </a>
                        </div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>

          <div className={styles.navbar__mobile__words}>
            {window.location.pathname === routes.admindashboard ? (
              <>
                <h4>Hello Admin</h4>
                <h5>Let’s check your stats today</h5>
              </>
            ) : window.location.pathname === routes.adminapplication ? (
              <>
                <h4>Applications</h4>
                <h5>View all applications</h5>
              </>
            ) : window.location.pathname === routes.admincomplaint ? (
              <>
                <h4>User Complaints</h4>
                <h5> See complaints from users</h5>
              </>
            ) : window.location.pathname === routes.admininventory ? (
              <>
                <h4>Inventory</h4>
                <h5> Check out available rooms</h5>
              </>
            ) : null}

            {/* For users */}
            {window.location.pathname === routes.userdashboard ? (
              <>
                <h4>Welcome Dahoma</h4>
                <h5>Here’s what we have for you today</h5>
              </>
            ) : window.location.pathname === routes.userapplication ? (
              <>
                <h4>Applications Corner</h4>
                <h5>Apply for hostels here</h5>
              </>
            ) : window.location.pathname === routes.userconfirmation ? (
              <>
                <h4>Hostel Confirmation</h4>
                <h5>Download your hostel confirmation slip here</h5>
              </>
            ) : window.location.pathname === routes.usercomplaint ? (
              <>
                <h4>Complaints</h4>
                <h5>Lodge a complaint to the admin</h5>
              </>
            ) : null}
          </div>
        </>
      </div>
    </>
  );
};

export { Navbar };
