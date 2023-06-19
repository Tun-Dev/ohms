import React from "react";
import styles from "./styles.module.scss";
import { NotificationIcon } from "assets";
import { routes } from "utils";

const Navbar = () => {
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
          <div className={styles.navbar__wrapper__notification}>
            <NotificationIcon />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.navbar__mobile}></div>
    </>
  );
};

export { Navbar };
