import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components/GeneralComponent/Button";
import { ConfirmationApplicationIcon } from "assets";
import { Modal } from "react-bootstrap";

interface ConAppProps {
  show: boolean;
  closeModal: () => void;
  data: Array<any>;
}

const ConfirmApplication: React.FC<ConAppProps> = ({
  show,
  closeModal,
  data,
}) => {
  //   console.log("modal data", data);

  const submit = () => {
    console.log("submit data", data);
  };

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
              <ConfirmationApplicationIcon />
              <div>
                <h4>Confirm application</h4>
                <h5>Are you sure you want to proceed with your application?</h5>
              </div>
            </div>
            <div className={styles.down}>
              <Button
                color="transparent"
                size="medium"
                onClick={() => closeModal()}
                className={styles.btn1}
              >
                Back to Application
              </Button>
              <Button
                color="blue"
                size="medium"
                className={styles.btn2}
                onClick={() => submit()}
              >
                Proceed with application
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ConfirmApplication };
