import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { CalendarIcon } from "assets";
import styles from "./styles.module.scss";
import { AppsCard } from "components/GeneralComponent";
import { useGetApplicationsQuery } from "services/auth/authService";
import { AppsCardData } from "components/GeneralComponent";

const typeOptions = [
  { value: "all", label: "All" },
  { value: "approved", label: "Approved" },
  { value: "pending", label: "Pending" },
  { value: "rejected", label: "Rejected" },
];

const AdminApplicationUI = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { data: allApplications } = useGetApplicationsQuery();

  const allApplicationsBucket: any = allApplications || [];

  console.log(allApplicationsBucket);

  const extractedData = useMemo(() => {
    const filteredData = allApplicationsBucket.data;
    return filteredData;
  }, [allApplications]);

  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__top}>
            <div className={styles.con__wrapper__top__inner}>
              <div className={styles.sort}>
                <h5>Sort by date</h5>
                <div className={styles.dates}>
                  <div className={styles.date}>
                    <DatePicker
                      placeholderText="Select start date"
                      onChange={(date: any) => {
                        setStartDate(date);
                        console.log(date);
                      }}
                      selected={startDate}
                      className={styles.date__picker}
                    />
                    <CalendarIcon />
                  </div>
                  <div className={styles.date}>
                    <DatePicker
                      placeholderText="Select end date"
                      onChange={(date: any) => {
                        setEndDate(date);
                        console.log(date);
                      }}
                      selected={endDate}
                      className={styles.date__picker}
                    />
                    <CalendarIcon />
                  </div>
                </div>
              </div>
              <div className={styles.type}>
                <Select
                  placeholder="Filter by status"
                  isMulti={false}
                  options={typeOptions}
                  className={styles.type__select}
                />
              </div>
            </div>
          </div>
          <div className={styles.con__wrapper__bottom}>
            <div className={styles.con__wrapper__bottom__inner}>
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
                  {extractedData &&
                    extractedData
                      .slice(0, 13)
                      .map((item: any, index: number) => {
                        return (
                          <AppsCard
                            key={index}
                            status={item.status}
                            name={`${item.firstname} ${item.lastname} ${item.othername}`}
                            faculty={item.faculty}
                            dept={item.department}
                            date={item.createdAt}
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

export { AdminApplicationUI };
