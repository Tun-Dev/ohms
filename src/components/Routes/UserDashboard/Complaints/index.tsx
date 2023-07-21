import React from "react";
import { useAddComplaintMutation } from "services/auth/authService";
import { Button } from "components/GeneralComponent";
import { useForm } from "react-hook-form";
import { Slide, ToastContainer, toast } from "react-toastify";
// import toast, { Toaster } from "react-hot-toast";
import styles from "./styles.module.scss";

const UserCompliantUI = () => {
  const { handleSubmit, setValue, control, watch, reset, register } = useForm();

  const [addcompliant] = useAddComplaintMutation();

  const submitForm = async (data: any) => {
    // console.log(data);

    await addcompliant({ data: data })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("Compliant sent.", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          autoClose: 3000,
          transition: Slide,
          className: styles.toast,
        });
        reset();
      });
  };

  const notify = () =>
    toast.success("Compliant sent.", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 3000,
      transition: Slide,
      className: styles.toast,
    });

  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className={styles.input}>
              <label htmlFor="name">Nature of complaint</label>
              <input type="text" {...register("title")} />
            </div>
            <div className={styles.input}>
              <label htmlFor="desc">Describe your experience (optional)</label>
              <textarea
                id=""
                cols={30}
                rows={10}
                {...register("description")}
              ></textarea>
            </div>
            <div className={styles.btncon}>
              <Button
                color="blue"
                size="small"
                onClick={() => null}
                type="submit"
                className={styles.btn}
              >
                Send complaint
              </Button>
            </div>
          </form>
        </div>
        {/* <button onClick={notify}>Notification Toast</button> */}
      </div>
      <ToastContainer />
      {/*    <Toaster
        position="top-left"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            // th: {
            //   primary: "green",
            //   secondary: "black",
            // },
          },
        }}
      /> */}
    </>
  );
};

export { UserCompliantUI };
