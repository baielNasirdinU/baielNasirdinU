import React from "react";
import styles from "../../util/style";
import myPhoto from "../../img/myPhoto.jpg";

import {


  FaArrowDown,

  FaArrowUp,
  FaVuejs,
} from "react-icons/fa";
const About = ({ theme, style }) => {
  return (
    <>
      <div
        className={` pb-[40px]  ${theme ? "dark" : "light"
          } ${style ? 'h-full ' : ''}`}
      >
        <div className={`${styles.container} `}>
          <div className={``}>
            <h2
              className={`${styles.textC} text-center text-[36px] relative  p-9 mb-9`}
            >
              {" "}
              about me
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
          </div>
          <div
            className={`${styles.flexBetween} flex-wrap  wb:flex-row ${styles.flexCenter} flex-col `}
          >
            {" "}
            <div className=" order-2 sm:order-1 w-[250px] md:w-[500px] xs:w-[400px]">
              <h2
                className={`${styles.textC} font-semibold text-[26px]  mb-[30px]`}
              >
                hey there! i'm baiel nasirdin uulu
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Natus nemo voluptate autem
                ad suscipit quasi sit aliquid non! Placeat
                exercitationem, culpa delectus reprehenderit
                illo dolore assumenda dolores. Minus, enim
                dolores.
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci debitis
                laboriosam iusto quod. Ex maiores mollitia
                distinctio ullam eligendi culpa iusto modi
                facilis alias facere. Iusto totam reiciendis
                enim. Consequatur.
              </p>


            </div>
            <div className="hidden wb:flex order-2 relative">
              <FaArrowUp className="absolute top-[-20px] left-[-6px]" />
              <div
                className={`${theme ? "   bg-white b" : " bg-black"
                  } w-[4px]  h-[250px]`}
              ></div>
              <FaArrowDown className="absolute bottom-[-20px] left-[-6px]" />
            </div>
            <div className="order-1 sm:order-3 lg:w-[400px] lg:h-[400px] sm:w-[350px] overflow-hidden w-[250px] rounded-[50%] m-3 ">
              <FaVuejs className=" text-[50%] absolute text-gray-500 -z-10 right-0 wb:hidden " />
              <img
                src={myPhoto}
                alt="phot me"
                className=" rounded-lg drop-shadow-2xl  "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
