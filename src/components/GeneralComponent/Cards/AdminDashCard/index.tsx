import React from "react";
import styles from "./styles.module.scss";
import { RoomsIcon } from "assets";

interface AdminDashCardProps {
  title?: string;
  num?: number | string;
  Svg?: React.ReactNode;
}

const AdminDashCard: React.FC<AdminDashCardProps> = ({ Svg, title, num }) => {
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__left}>
            {Svg}
            <h4>{title}</h4>
          </div>
          <div className={styles.con__wrapper__right}>
            <h4>{num}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminDashCard };
