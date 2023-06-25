import React, { useMemo } from "react";
// import { Preview, print } from "react-html2pdf";
import { CustomPage } from "components/GeneralComponent";
import { AVI5, NoApplicationIcon } from "assets";
import { UnilagLogo, SlipImg } from "assets";
import { Button } from "components/GeneralComponent";
import styles from "./styles.module.scss";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import { useGetUserProfileQuery } from "services/auth/authService";
// import { CustomPage } from "components/GeneralComponent";
// import { jsPDF, jsPDFOptions } from "jspdf";

// const options: jsPDFOptions = {
//   orientation: "landscape",
//   format: [297, 210],
// };

const UserHostelSlipUI = () => {
  const htmlRef = React.useRef<HTMLDivElement>(null);

  const printPDF = () => {
    const domElement = document.getElementById("test")!;
    // const domElement = htmlRef.current as HTMLElement;
    html2canvas(domElement, {
      scale: 2,
    }).then((canvas) => {
      // const imgData = canvas.toDataURL();
      // const pdf = new jsPdf({ orientation: "landscape" });
      // pdf.addImage(imgData, "JPEG", 0, 0, 1158, 540);
      // pdf.save(`${new Date().toISOString()}.pdf`);

      var img = canvas.toDataURL("image/png"); //image data of canvas
      var wid = canvas.width;
      var hgt = canvas.height;
      var hratio = hgt / wid;
      var doc = new jsPdf({
        orientation: "landscape",
      });
      var width = doc.internal.pageSize.width;
      var height = doc.internal.pageSize.height;
      var height = width * hratio;
      doc.addImage(img, "JPEG", width * 0.025, 20, width * 0.95, height * 0.95);
      doc.save(`${new Date().toISOString()}.pdf`);

      // const imgWidth = 208;
      // const pageHeight = 295;
      // const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // const heightLeft = imgHeight;

      // const contentDataURL = canvas.toDataURL("image/png");
      // const pdf = new jsPdf("l", "mm", "a4"); // A4 size page of PDF
      // const position = 0;
      // pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      // pdf.save("ikismail.pdf"); // Generated PDF
    });
  };

  const id = localStorage.getItem("idOHMS");
  console.log(id);
  const { data: userProfile, error } = useGetUserProfileQuery({ id: id });

  const userProfileBucket: any = userProfile || [];

  const extractedData = useMemo(() => {
    const filteredData = userProfileBucket.data;
    return filteredData;
  }, [userProfileBucket]);

  return (
    <>
      {/* <div className={styles.con} id="test">
        <CustomPage
          Svg={<NoApplicationIcon />}
          header="Oops... You have no application yet"
          desc="Hey Dahoma, you have not applied for any bedspace.
          Go to the applications page and start the process now."
          btnText="Start application"
        />
      </div> */}
      {extractedData && extractedData.note === "No application" ? (
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
      ) : null}
      {/* <div className={styles.slipcontainer}>
        <div className={styles.slip} id="test">
          <div className={styles.slip__top}>
            <div className={styles.slip__top__left}>
              <img src={UnilagLogo} alt="" />
            </div>
            <div className={styles.slip__top__mid}>
              <div className={styles.wordtop}>
                <h4>UNIVERSITY OF LAGOS</h4>
                <h5>STUDENT AFFAIRS DIVISION</h5>
              </div>
              <div className={styles.worddown}>
                <h4>CLEARANCE FORM FOR ACCOMMODATION</h4>
              </div>
            </div>
            <div className={styles.slip__top__right}>
              <img src={SlipImg} alt="" />
            </div>
          </div>
          <div className={styles.slip__mid}>
            <div className={styles.slip__mid__top}>
              <div className={styles.write}>
                <h4>MR./MRS./MISS:</h4>
                <div className={styles.res}>
                  <h5>Tungbulu Douye Paul</h5>
                </div>
              </div>
              <div className={styles.write}>
                <h4>FACULTY/DEPARTMENT:</h4>
                <div className={styles.res}>
                  <h5>Engineering</h5>
                </div>
              </div>
              <div className={styles.write2}>
                <div className={styles.item}>
                  <h4>YEAR OF STUDY (LEVEL):</h4>
                  <div className={styles.res}>
                    <h5>200</h5>
                  </div>
                </div>
                <div className={styles.item}>
                  <h4>HOSTEL:</h4>
                  <div className={styles.res}>
                    <h5>Jaja</h5>
                  </div>
                </div>
                <div className={styles.item}>
                  <h4>ROOM NO:</h4>
                  <div className={styles.res}>
                    <h5>B114</h5>
                  </div>
                </div>
                <div className={styles.item}>
                  <h4>BED SPACE</h4>
                  <div className={styles.res}>
                    <h5>A</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slip__mid__bot}>
              <div className={styles.sign}>
                <div className={styles.inner}>
                  <div className={styles.write}></div>
                  <div className={styles.words}>
                    <h4>HALL WARDEN</h4>
                    <h5>Sign & Official Stamp</h5>
                  </div>
                </div>
              </div>
              <div className={styles.sign}>
                <div className={styles.inner}>
                  <div className={styles.write}></div>
                  <div className={styles.words}>
                    <h4>HOSPITALITY STAFF</h4>
                    <h5>Sign & Official Stamp</h5>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className={styles.slip__bottom}>
            <h4>
              <span>IMPORTANT NOTICE:</span> THIS CLEARNACE SLIP SERVES AS AN
              IDENTIFICATION DOCUMENT IN ALL TRANSACTIONS WITH THE STUDENT
              AFFAIRS DIVISION OFFICE
            </h4>
          </div>
        </div>

        <Button
          size="medium"
          color="blue"
          className={styles.btn}
          onClick={() => printPDF()}
        >
          Click to Print
        </Button>
      </div> */}

      {/* <button id="print" onClick={printPDF}>
        Print
      </button> */}
    </>
  );
};

export { UserHostelSlipUI };
