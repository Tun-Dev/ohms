import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Avi1, Avi2, Avi3, Avi4, CalendarIcon } from "assets";
import Select from "react-select";
import { useGetAllCompliantsQuery } from "services/auth/authService";
import styles from "./styles.module.scss";
import { CompsCard } from "components/GeneralComponent";

const typeOptions = [
  { value: "all", label: "All" },
  { value: "approved", label: "Approved" },
  { value: "pending", label: "Pending" },
  { value: "rejected", label: "Rejected" },
];

const compsData = [
  {
    img: Avi1,
    name: "Uwadoka Nonso M.",
    date: "09/01/2023",
    complaint:
      "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh e...",
    read: false,
  },
  {
    img: Avi2,
    name: "Uwadoka Nonso M.",
    date: "09/01/2023",
    complaint:
      "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh e...",
    read: false,
  },
  {
    img: Avi3,
    name: "Uwadoka Nonso M.",
    date: "09/01/2023",
    complaint:
      "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh e...",
    read: false,
  },
  {
    img: Avi4,
    name: "Uwadoka Nonso M.",
    date: "09/01/2023",
    complaint:
      "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh e...",
    read: true,
  },
];

const AdminComplaintsUI = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { data: allCompliants } = useGetAllCompliantsQuery();

  const allCompliantsBucket: any = allCompliants || [];

  console.log(allCompliantsBucket.data);

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
                {/* <Select
                  placeholder="Filter by status"
                  isMulti={false}
                  options={typeOptions}
                  className={styles.type__select}
                /> */}
              </div>
            </div>
          </div>
          <div className={styles.con__wrapper__bottom}>
            {compsData &&
              compsData.map((data: any, index: number) => {
                return (
                  <CompsCard
                    key={index}
                    title={data.title}
                    name={data.name}
                    date={data.date}
                    complaint={data.complaint}
                    read={data.read}
                    img={Avi1}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminComplaintsUI };
