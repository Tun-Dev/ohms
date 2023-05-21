import React from "react";
import styles from "./styles.module.scss";
import { CustomPage } from "components/GeneralComponent";
import { ReviewApplication } from "assets";

const UserDashboardUI = () => {
  return (
    <>
      <div className={styles.con}>
        <CustomPage
          Svg={<ReviewApplication />}
          header="Sorry... Your application is still under review"
          desc="Hey Dahoma, your application to King Jaja hostel is still under review.
          We’ll be sure to keep you updated."
          btnText="Lodge a complaint"
        />
      </div>
    </>
  );
};

export { UserDashboardUI };
