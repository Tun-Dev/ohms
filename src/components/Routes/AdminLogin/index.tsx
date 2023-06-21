import React, { useEffect } from "react";
import { Button } from "components/GeneralComponent";
import { OHMSLogoIcon } from "assets";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { authLogin } from "features";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { AppDispatch } from "services/store";
import { RootState } from "services/store";

const AdminLoginUI = () => {
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
    if (authRole === "admin") {
      navigate("/admin/dashboard");
    }
  }, [authRole]);

  // useEffect(() => {
  //   console.log(authRole);
  // });

  const submitForm = (data: any) => {
    dispatch(authLogin(data));
  };
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__left}></div>
          <div className={styles.con__wrapper__right}>
            <div className={styles.formgroup}>
              <OHMSLogoIcon />

              <p>Log in to your account</p>
              <form onSubmit={handleSubmit(submitForm)}>
                <input
                  type="text"
                  placeholder="Enter email"
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
                  type="submit"
                  color="blue"
                  onClick={() => {
                    null;
                    // navigate("/admin/dashboard");
                  }}
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
