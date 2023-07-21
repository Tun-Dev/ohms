import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import { useGetUserProfileQuery } from "services/auth/authService";
import { CustomPage } from "components/GeneralComponent";
import {
  ReviewApplication,
  NoApplicationIcon,
  ConfirmationApplicationIcon,
} from "assets";

const UserDashboardUI = () => {
  const id = localStorage.getItem("idOHMS");
  console.log(id);
  const { data: userProfile, error } = useGetUserProfileQuery({ id: id });

  const userProfileBucket: any = userProfile || [];

  const extractedData = useMemo(() => {
    const filteredData = userProfileBucket?.data?.respData;
    return filteredData;
  }, [userProfileBucket]);

  console.log(userProfile?.data);
  // console.log(error);
  console.log(extractedData?.note);

  return (
    <>
      <div className={styles.con}>
        {extractedData && extractedData?.note === "No application" ? (
          <>
            <CustomPage
              Svg={<NoApplicationIcon />}
              header="Oops... You have no application yet"
              desc="Hey, you have not applied for any bedspace.
              Go to the applications page and start the process now."
              btnText="Start application"
            />
          </>
        ) : extractedData?.note === "approved" ? (
          <>
            <CustomPage
              Svg={<ConfirmationApplicationIcon />}
              header="Your hostel confirmation slip is ready"
              desc="Hey, you can now download your hostel confirmation slip."
              btnText="Download slip"
            />
          </>
        ) : extractedData?.note === "reveiwing" ? (
          <>
            <CustomPage
              Svg={<ReviewApplication />}
              header="Sorry... Your application is still under review"
              desc="Hey Dahoma, your application to King Jaja hostel is still under review.
          We’ll be sure to keep you updated."
              btnText="Lodge a complaint"
            />
          </>
        ) : (
          <>
            <CustomPage
              Svg={<NoApplicationIcon />}
              header="Oops... You have no application yet"
              desc="Hey, you have not applied for any bedspace.
            Go to the applications page and start the process now."
              btnText="Start application"
            />
          </>
        )}
      </div>
    </>
  );
};

export { UserDashboardUI };
