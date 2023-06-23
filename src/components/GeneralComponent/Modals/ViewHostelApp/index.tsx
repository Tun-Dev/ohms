import React from "react";
import styles from "./styles.module.scss";
import { CloseIcon, AVI5, DownloadIcon } from "assets";
import { Modal } from "react-bootstrap";
import { Button } from "components/GeneralComponent/Button";
import { useGetSpecificApplicationDetailQuery } from "services/auth/authService";

interface ViewAppProps {
  show: boolean;
  closeModal: () => void;
  id?: string;
  // data: Array<any>;
}

const ViewApplicationDetails: React.FC<ViewAppProps> = ({
  show,
  closeModal,
  id,
}) => {
  console.log(id);

  const { data: specificApplication, error } =
    useGetSpecificApplicationDetailQuery(id);

  console.log(specificApplication);
  console.log(error);

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
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <div className={styles.con}>
            <div className={styles.top}>
              <div className={styles.top__words}>
                <h4>Hostel Application</h4>
                <h5>Hostel application by Olayiwola John D.</h5>
              </div>
              <div onClick={() => closeModal()} className={styles.top__close}>
                <CloseIcon />
              </div>
            </div>
            <div className={styles.mid}>
              <div className={styles.mid__top}>
                <img src={AVI5} alt="" />
                <h4>
                  <span>Name:</span>Olayiwola John Damilola
                </h4>
                <h4>
                  <span>Department:</span>Chemical Engineering
                </h4>
                <h4>
                  <span>Level: </span>300
                </h4>
              </div>
              <div className={styles.mid__down}>
                <div className={styles.header}>
                  <h4>Documents Uploaded</h4>
                </div>
                <div className={styles.showboxCon}>
                  <div className={styles.showbox}>
                    <div className={styles.inner}>
                      <div className={styles.info}>
                        <h4>Hostel Payment Slip</h4>
                        <DownloadIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.showbox}>
                    <div className={styles.inner}>
                      <div className={styles.info}>
                        <h4>Signed letter by lawyer</h4>
                        <DownloadIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.showbox}>
                    <div className={styles.inner}>
                      <div className={styles.info}>
                        <h4>WAPIC Insurance receipt</h4>
                        <DownloadIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.showbox}>
                    <div className={styles.inner}>
                      <div className={styles.info}>
                        <h4>Lagmobile receipt</h4>
                        <DownloadIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.down}>
              <div>
                <Button
                  size="medium"
                  color="transparent"
                  className={styles.btn1}
                  onClick={() => closeModal()}
                >
                  Reject application
                </Button>
                <Button
                  size="medium"
                  color="blue"
                  className={styles.btn2}
                  onClick={() => null}
                >
                  Accept application
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ViewApplicationDetails };
