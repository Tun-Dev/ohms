import React from "react";
import styles from "./styles.module.scss";
import { CloseIcon } from "assets";
import { Modal } from "react-bootstrap";

interface ViewRoomProps {
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

const ViewRoomDetails: React.FC<ViewRoomProps> = ({ show, closeModal }) => {
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
                <h4>A007</h4>
                <h5>8-man room</h5>
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
