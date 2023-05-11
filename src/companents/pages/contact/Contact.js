import React from "react";
import styles from "../../util/style";
import ReactMap from "./map/ReactMap";
import ContactForm from "./form/ContactForm";

const Contact = ({ theme }) => {
  return (
    <div
      className={`  ${theme ? " dark" : "light"
        } pt-[80px] pb-[50px]`}
    >
      <h1 className="text-center p-6 text-[22px] capitalize ">
        contact me
      </h1>
      <div
        className={`${styles.container} ${styles.flexBetween} lg:flex-row  flex-col  `}
      >
        <ContactForm theme={theme} />
        <ReactMap />
      </div>
    </div>
  );
};

export default Contact;
