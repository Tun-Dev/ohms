import React from "react";
import { Avi1 } from "assets";
import styles from "./styles.module.scss";

interface CompsCardProps {
  name?: string;
  date?: string;
  complaint?: string;
  read?: boolean;
  img?: string;
}

const CompsCard: React.FC<CompsCardProps> = ({
  name,
  date,
  complaint,
  read,
  img,
}) => {
  return (
    <>
      <div className={styles.comps}>
        <div className={styles.comps__wrapper}>
          <div className={styles.comps__wrapper__top}>
            <div className={styles.img}>
              <img src={img} alt="avatar" />
            </div>
            <div className={styles.title}>
              <h4>{name}</h4>
              <h5>{date}</h5>
            </div>
          </div>
          <div className={styles.comps__wrapper__bottom}>
            <div className={styles.left}>
              <h5>{complaint}</h5>
            </div>
            <div className={styles.right}>
              <h5>Mark as read</h5>
            </div>
          </div>
        </div>
        <span className={styles.divider}></span>
      </div>
    </>
  );
};

export { CompsCard };
