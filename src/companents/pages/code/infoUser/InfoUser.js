import React from "react";
import styles from "../../../util/style";
// import styles from "../../../util/style";

const InfoUser = (props) => {
  //   console.log(props);
  return (
    <>
      <div
        className={` border mb-5 shadow-sm p-4 rounded-lg ${
          props.theme ? "" : "bg-gray-300"
        }`}
      >
        <h2 className={`${styles.textC} text-[18px]`}>
          users ...{props.userCount}...
        </h2>
        <h2 className={`${styles.textC} text-[18px]`}>
          stars...{props.stars}...
        </h2>
      </div>
    </>
  );
};

export default InfoUser;
