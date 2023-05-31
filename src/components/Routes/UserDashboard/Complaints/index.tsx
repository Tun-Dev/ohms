import React from "react";
import { Button } from "components/GeneralComponent";
import styles from "./styles.module.scss";

const UserCompliantUI = () => {
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <form action="">
            <div className={styles.input}>
              <label htmlFor="name">Nature of complaint</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="desc">Describe your experience (optional)</label>
              <textarea name="desc" id="" cols={30} rows={10}></textarea>
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
      </div>
    </>
  );
};

export { UserCompliantUI };
