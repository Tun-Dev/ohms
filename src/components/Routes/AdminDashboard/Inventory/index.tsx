import React, { useMemo } from "react";
import Select from "react-select";
import styles from "./styles.module.scss";
import { useGetRoomsQuery } from "services/auth/authService";
import { InventoryData } from "./data";
import { InventoryCard } from "components/GeneralComponent";

const typeOptions = [
  { value: "4-man room", label: "4-man room" },
  { value: "6-man room", label: "6-man room" },
  { value: "8-man room", label: "8-man room" },
  { value: "10-man room", label: "10-man room" },
];

const AdminInventoryUI = () => {
  const { data: allRooms, error } = useGetRoomsQuery();

  console.log(allRooms);

  const allRoomsBucket: any = allRooms || [];

  // console.log(allRoomsBucket);

  const extractedData = useMemo(() => {
    const filteredData = allRoomsBucket.data;
    return filteredData;
  }, [allRooms]);

  return (
    <>
      <div className={styles.con}>
        <div className={styles.con__wrapper}>
          <div className={styles.con__wrapper__top}>
            <div className={styles.con__wrapper__top__inner}>
              <div className={styles.type}>
                <Select
                  placeholder="Filter by room size"
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
                    <h5>Room number</h5>
                  </div>
                  <div className={styles.header}>
                    <h5>No of residents</h5>
                  </div>
                </div>
                <div className={styles.apps}>
                  {InventoryData &&
                    InventoryData.slice(0, 13).map(
                      (item: any, index: number) => {
                        return (
                          <InventoryCard
                            id={item._id}
                            key={index}
                            status={item.status}
                            room={item.roomNumber}
                            noOfresidents={item.noOfResidents}
                          />
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AdminInventoryUI };
