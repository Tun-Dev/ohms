import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../Button";

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
          onClick={() => null}
        >
          {btnText}
        </Button>
      </div>
    </>
  );
};

export { CustomPage };
