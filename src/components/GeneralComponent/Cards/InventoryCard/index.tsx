import React from "react";
import styles from "./styles.module.scss";

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
  return (
    <>
      <div className={styles.con}>
        <div className={styles.item}>
          <h5>{status}</h5>
        </div>
        <div className={styles.item}>
          <h4> {room}</h4>
        </div>
        <div className={styles.item}>
          <h4>{noOfresidents}</h4>
        </div>
      </div>
    </>
  );
};

export { InventoryCard };
