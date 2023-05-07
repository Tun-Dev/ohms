import React from "react";
import { Button } from "components/GeneralComponent";
import { OHMSLogoIcon } from "assets";
import styles from "./styles.module.scss";

const AdminLoginUI = () => {
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__left}></div>
          <div className={styles.con__wrapper__right}>
            <div className={styles.formgroup}>
              <OHMSLogoIcon />

              <p>Log in to your account</p>
              <form action="">
                <input type="text" placeholder="Enter email" />
                <input type="text" placeholder="Password" />
                <Button
                  className={styles.btn}
                  size="large"
                  color="blue"
                  onClick={() => null}
                >
                  LOG IN
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminLoginUI };
