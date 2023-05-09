import React from "react";
// import heroBg from "../../img/heroBg.jpg";
import { FaLongArrowAltRight } from 'react-icons/fa'
import styles from "../../util/style";
import { NavLink } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaLaptopCode,
  FaSass,
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Hero({ theme, setTheme }) {
  return (
    <>
      <div className={`${theme ? "dark" : "light"} `}>
        <div
          className={`${styles.container} h-[650px] ${styles.flexBetween} `}
        >
          <div className="">
            <h2
              className={`${styles.textC} sm:text-[32px] font-semibold text-[22px]  `}
            >
              hello, i'm
            </h2>
            <h3
              className={`${styles.textC}sm:text-[32px] text-[24px] font-semibold mt-3`}
            >
              Bsiel Nasirdin uulu
            </h3>
            <p
              className={`${styles.textC}sm:text-[32px] text-[24px] font-semibold rounded-[20px]  mt-3 mb-6`}
            >
              front-end developer
            </p>

            <div className="w-[120px] border p-2 rounded group bg-blue-700">
              <NavLink
                to="/website" className={`flex justify-between ${styles.flexBetween} `}

              >
                my works <FaLongArrowAltRight className="group-hover:rotate-90 duration-500 " />
              </NavLink></div>

            <div
              className={`mt-[40px] flex gap-[15px] transition-all duration-500  ${theme ? " text-white" : " text-black"
                }`}
            >
              <a href="https://www.facebook.com/">
                {" "}
                <FaFacebookSquare className="text-[33px] hover:scale-[2]  transition-all duration-500" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare className="text-[33px] hover:scale-[2] transition-all duration-500 " />
              </a>
              <a href="https://web.whatsapp.com/">
                <FaWhatsappSquare className="text-[33px] hover:scale-[2]  transition-all duration-500" />
              </a>
            </div>
          </div>
          <div
            className={`sm:flex w-[220px] hidden relative h-[250px] mr-[100px] ${styles.flexCenter} `}
          >
            <FaHtml5 className="sm:w-[150px]  h-[150px] " />
            <FaCss3Alt className="sm:w-[150px]  h-[150px] absolute left-[-80px] top-[-100px]" />
            <FaReact className="sm:w-[150px]  h-[150px] absolute left-[-80px] bottom-[-100px]" />
            <FaJsSquare className="sm:w-[150px]  h-[150px] absolute right-[-80px] bottom-[-100px]" />
            <FaSass className="sm:w-[150px]  h-[150px] absolute right-[-80px] top-[-100px]" />
          </div>
          <FaLaptopCode className="sm:hidden  w-[150px] h-[150px] right-[-80px] ss:w-[250px] ss:h-[250px] top-[-100px]" />
        </div>
      </div>
    </>
  );
}

export default Hero;
