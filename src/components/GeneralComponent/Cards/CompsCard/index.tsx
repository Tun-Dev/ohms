import React from "react";
import { Avi1 } from "assets";
import styles from "./styles.module.scss";

interface CompsCardProps {
  name?: string;
  date?: string;
  complaint?: string;
  read?: boolean;
  img?: string;
  title?: string;
}

const CompsCard: React.FC<CompsCardProps> = ({
  name,
  date,
  complaint,
  read,
  img,
  title,
}) => {
  const datestring: string = date || "";
  const finaldate: Date = new Date(datestring);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDateString: string = finaldate.toLocaleDateString(
    undefined,
    options
  );

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
              <h5>{formattedDateString}</h5>
            </div>
          </div>
          <div className={styles.comps__wrapper__bottom}>
            <div className={styles.left}>
              <h4>{title}</h4>
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
