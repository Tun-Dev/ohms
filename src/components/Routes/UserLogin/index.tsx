import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Button } from "components/GeneralComponent";
import { OHMSLogoIcon } from "assets";
import { useNavigate } from "react-router-dom";
import { authLogin } from "features";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { AppDispatch } from "services/store";
import { RootState } from "services/store";

const UserLoginUI = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loading, authRole } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  useEffect(() => {
    if (authRole === "user") {
      navigate("/user/dashboard");
    }
  }, [authRole]);

  // useEffect(() => {
  //   console.log(authRole);
  // });

  const submitForm = (data: any) => {
    //   dispatch(authLogin(data));
  };
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__formgroup}>
            <OHMSLogoIcon />
            <p>Log in to your account</p>

            <form onSubmit={handleSubmit(submitForm)}>
              <input
                type="text"
                placeholder="Email Address"
                {...register("email")}
              />
              <input
                type="text"
                placeholder="Password"
                {...register("password")}
              />
              <Button
                className={styles.btn}
                size="large"
                color="blue"
                type="submit"
                onClick={() => {
                  // null;
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
