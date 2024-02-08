import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { CloseIcon } from "assets";
import { useGetSpecificRoomQuery } from "services/auth/authService";
import { Modal } from "react-bootstrap";

interface ViewRoomProps {
  id?: any;
  show: boolean;
  closeModal: () => void;

  // data: Array<any>;
}

interface bodyTypes {
  name?: string;
  level?: string;
  dept?: string;
}

// interface dataProps {
//   name: string;
//   level: string;
//   dept: string;
// }

const data: any[] = [
  { name: "Olayiwola John D.", level: "300", dept: "Chemical Engr" },
  { name: "Olayiwola John D.", level: "300", dept: "Chemical Engr" },
  { name: "Olayiwola John D.", level: "300", dept: "Chemical Engr" },
  { name: "Olayiwola John D.", level: "300", dept: "Chemical Engr" },
  { name: "Olayiwola John D.", level: "300", dept: "Chemical Engr" },
  { name: "Olayiwola John D.", level: "300", dept: "Chemical Engr" },
];

const BodyLine: React.FC<bodyTypes> = ({ name, level, dept }) => (
  <>
    <div className={styles.itemCon}>
      <div className={styles.item}> {name} </div>
      <div className={styles.item}>{level}</div>
      <div className={styles.item}>{dept}</div>
    </div>
  </>
);

const ViewRoomDetails: React.FC<ViewRoomProps> = ({ show, closeModal, id }) => {
  console.log(id);

  const { data: roomDetails } = useGetSpecificRoomQuery({ id: id });

  const roomDetailsBucket: any = roomDetails || [];

  console.log(roomDetails);

  const extractedData = useMemo(() => {
    const filteredData = roomDetailsBucket.data;
    return filteredData;
  }, [roomDetails]);

  const extractedResidents = useMemo(() => {
    const filteredData = roomDetailsBucket.data?.residents;
    return filteredData;
  }, [roomDetails]);

  console.log(extractedResidents);

  return (
    <>
      <Modal
        dialogClassName={styles.mymodal}
        contentClassName={styles.mycontent}
        centered
        show={show}
        onHide={closeModal}
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.con}>
            <div className={styles.top}>
              <div className={styles.top__words}>
                <h4>{extractedData && extractedData.roomNumber}</h4>
                <h5>{extractedData && extractedData.roomType}-man room</h5>
              </div>
              <div onClick={() => closeModal()} className={styles.top__close}>
                <CloseIcon />
              </div>
            </div>
            <div className={styles.down}>
              <div className={styles.topic}>
                <h4>Occupants info</h4>
              </div>
              <div className={styles.table}>
                <div className={styles.headers}>
                  <div className={styles.header}>Name</div>
                  <div className={styles.header}>Level</div>
                  <div className={styles.header}>Department</div>
                </div>
                <div className={styles.body}>
                  {/* {extractedData === 0 ? <h4>No residents</h4> : null} */}
                  {data.map((item, index) => (
                    <BodyLine
                      key={index}
                      name={item.name}
                      level={item.level}
                      dept={item.dept}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ViewRoomDetails };
