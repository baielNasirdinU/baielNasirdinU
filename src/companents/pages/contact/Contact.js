import React from "react";
import styles from "../../util/style";
import ReactMap from "./map/ReactMap";
import ContactForm from "./form/ContactForm";

const Contact = ({ theme, style }) => {
  return (
    <div
      className={`  ${theme ? " dark" : "light"
        } ${style ? 'lg:h-screen' : ''} pt-[50px] pb-[50px]`}
    >
      <h2 id='/code'
        className={`${styles.textC}  text-center text-[36px] relative  p-9 `}
      >

        contact
        <div
          className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
            } absolute left-[50%]  `}
        ></div>
        <div
          className={`w-[10px] h-[10px] ${theme ? "   bg-white b" : " bg-black"
            } absolute left-[50%]  translate-x-[-50%] rounded-lg`}
        ></div>
        <div
          className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
            } absolute right-[50%] `}
        ></div>
      </h2>
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
