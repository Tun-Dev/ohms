import React, { useEffect, useState, useCallback } from "react";
import { truncateString } from "utils";
import styles from "./styles.module.scss";
import { AppsCardData } from "./data";
import { ViewApplicationDetails } from "components/GeneralComponent/Modals";

interface AppsCardProps {
  status?: string;
  name?: string;
  faculty?: string;
  dept?: string;
  date?: string;
}

const AppsCard: React.FC<AppsCardProps> = ({
  status,
  name,
  faculty,
  dept,
  date,
}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, [window.innerWidth]);

  return (
    <>
      <ViewApplicationDetails show={show} closeModal={() => setShow(!show)} />
      <div onClick={() => setShow(true)} className={styles.con}>
        <div className={styles.item}>
          <div
            className={`${styles.status} ${
              status === "approved"
                ? styles.approved
                : status === "pending"
                ? styles.pending
                : status === "rejected"
                ? styles.rejected
                : ""
            }`}
          >
            <div className={styles.dot}></div>
            <h5>
              {status?.charAt(0).toUpperCase()}
              {status?.slice(1)}
            </h5>
          </div>
        </div>
        <div className={styles.item}>
          <h4> {windowSize > 800 ? name : truncateString(name, 11)}</h4>
        </div>
        <div className={styles.item}>
          <h4>{faculty}</h4>
        </div>
        <div className={styles.item}>
          <h4>{dept}</h4>
        </div>
        <div className={styles.item}>
          <h4>{date}</h4>
        </div>
      </div>
    </>
  );
};

export { AppsCard };
