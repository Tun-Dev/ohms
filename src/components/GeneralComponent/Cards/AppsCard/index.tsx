import React from "react";
import styles from "./styles.module.scss";
import { AppsCardData } from "./data";

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
  return (
    <>
      <div className={styles.con}>
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
          <h4> {name}</h4>
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
