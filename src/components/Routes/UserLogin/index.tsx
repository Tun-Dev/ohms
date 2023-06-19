import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components/GeneralComponent";
import { OHMSLogoIcon } from "assets";
import { useNavigate } from "react-router-dom";

const UserLoginUI = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__formgroup}>
            <OHMSLogoIcon />
            <p>Log in to your account</p>

            <form action="">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <Button
                className={styles.btn}
                size="large"
                color="blue"
                onClick={() => {
                  navigate("/user/dashboard");
                }}
              >
                LOG IN
              </Button>
            </form>

            <h5>I have read the Terms and Conditions</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export { UserLoginUI };
