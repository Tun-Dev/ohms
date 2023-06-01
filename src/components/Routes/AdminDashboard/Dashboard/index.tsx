import React from "react";
import { AdminDashCard, AppsCard } from "components/GeneralComponent";
import { RoomsIcon, BdAvailableIcon, BdTakenIcon } from "assets";
import styles from "./styles.module.scss";
import { AppsCardData } from "components/GeneralComponent/Cards/AppsCard/data";

const AdminDashboardUI = () => {
  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__top}>
            <AdminDashCard
              Svg={<RoomsIcon />}
              title="No of rooms available"
              num="12"
            />
            <AdminDashCard
              Svg={<BdAvailableIcon />}
              title="Bedspaces available"
              num="2500"
            />
            <AdminDashCard
              Svg={<BdTakenIcon />}
              title="Bedspaces taken"
              num="2345"
            />
          </div>
          <div className={styles.con__wrapper__bottom}>
            <div className={styles.con__wrapper__bottom__inner}>
              <div className={styles.top}>
                <h4>Recent Applications</h4>
                <h5>Recent hostel applications for the past week</h5>
              </div>
              <div className={styles.down}>
                <div className={styles.headers}>
                  <div className={styles.header}>
                    <h5>Status</h5>
                  </div>
                  <div className={styles.header}>
                    <h5>Name</h5>
                  </div>
                  <div className={styles.header}>
                    <h5>Faculty</h5>
                  </div>
                  <div className={styles.header}>
                    <h5>Department</h5>
                  </div>
                  <div className={styles.header}>
                    <h5>Date applied</h5>
                  </div>
                </div>
                <div className={styles.apps}>
                  {AppsCardData.length > 0 &&
                    AppsCardData.map((item, index) => {
                      return (
                        <AppsCard
                          key={index}
                          status={item.status}
                          name={item.name}
                          faculty={item.faculty}
                          dept={item.dept}
                          date={item.date}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminDashboardUI };
