import React from "react";
// import { Preview, print } from "react-html2pdf";
import { CustomPage } from "components/GeneralComponent";
import { NoApplicationIcon } from "assets";
import styles from "./styles.module.scss";

const UserHostelSlipUI = () => {
  return (
    <>
      <div className={styles.con}>
        <CustomPage
          Svg={<NoApplicationIcon />}
          header="Oops... You have no application yet"
          desc="Hey Dahoma, you have not applied for any bedspace.
          Go to the applications page and start the process now."
          btnText="Start application"
        />
      </div>
    </>
  );
};

export { UserHostelSlipUI };
