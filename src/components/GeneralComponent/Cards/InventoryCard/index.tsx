import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ViewRoomDetails } from "components/GeneralComponent/Modals";

interface InventoryCardProps {
  status?: string;
  room?: string;
  noOfresidents?: string;
}

const InventoryCard: React.FC<InventoryCardProps> = ({
  status,
  room,
  noOfresidents,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ViewRoomDetails show={show} closeModal={() => setShow(!show)} />
      <div onClick={() => setShow(true)} className={styles.con}>
        <div className={styles.item}>
          <h5>{status}</h5>
        </div>
        <div className={styles.item}>
          <h4>{room}</h4>
        </div>
        <div className={styles.item}>
          <h4>{noOfresidents}</h4>
        </div>
      </div>
    </>
  );
};

export { InventoryCard };
