import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

interface CustomPageProps {
  header: string;
  desc: string;
  btnText: string;
  Svg: React.ReactNode;
}

const CustomPage: React.FC<CustomPageProps> = ({
  header,
  desc,
  Svg,
  btnText,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.con}>
        <div className={styles.svgCon}>{Svg}</div>
        <h4>{header}</h4>
        <h5>{desc}</h5>
        <Button
          className={styles.btn}
          color="transparent"
          size="smallNBR"
          onClick={() => {
            if (btnText === "Start application") {
              navigate("/user/application");
            }

            if (btnText === "Lodge a complaint") {
              navigate("/user/complaint");
            }
          }}
        >
          {btnText}
        </Button>
      </div>
    </>
  );
};

export { CustomPage };
