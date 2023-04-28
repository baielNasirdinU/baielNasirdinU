import React from "react";
import styles from "../../util/style";
import myPhoto from "../../img/myPhoto.jpg";
import material from "../../img/material.png";
import tailwind from "../../img/tailwind.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaArrowDown,
  FaJsSquare,
  FaArrowUp,
  FaVuejs,
} from "react-icons/fa";
const About = ({ theme }) => {
  return (
    <>
      <div
        className={` pb-[40px]  ${
          theme ? "dark" : "light"
        }`}
      >
        <div className={`${styles.container} `}>
          <div className={``}>
            <h2
              className={`${styles.textC} text-center text-[36px] relative  p-9 mb-9`}
            >
              {" "}
              about me
              <div
                className={`w-[50px] h-[4px] ${
                  theme ? "   bg-white b" : " bg-black"
                } absolute left-[50%]  `}
              ></div>
              <div
                className={`w-[10px] h-[10px] ${
                  theme ? "   bg-white b" : " bg-black"
                } absolute left-[50%]  translate-x-[-50%] rounded-lg`}
              ></div>
              <div
                className={`w-[50px] h-[4px] ${
                  theme ? "   bg-white b" : " bg-black"
                } absolute right-[50%] `}
              ></div>
            </h2>
          </div>
          <div
            className={`${styles.flexBetween} flex-wrap  wb:flex-row ${styles.flexCenter} flex-col `}
          >
            {" "}
            <div className=" order-2 sm:order-1 md:w-[500px] w-[400px]">
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
              <h2
                className={`${styles.textC} text-center mt-3 mb-5 text-[24px] font-semibold`}
              >
                my skills
              </h2>
              <div
                className={`flex-row flex p-2 overflow-hidden rounded-lg overflow-x-auto`}
              >
                <div
                  className={`w-[120px] h-[90px] p-[10px] border   rounded text-center hover:bg-black hover:text-white transition-all duration-500`}
                >
                  {" "}
                  <FaHtml5
                    className={`w-[100px] h-[50px]`}
                  />
                  <div className="">html</div>
                </div>
                <div
                  className={`w-[120px] h-[90px] p-[10px] border  rounded text-center hover:bg-black hover:text-white transition-all duration-500`}
                >
                  {" "}
                  <FaCss3Alt
                    className={`w-[110px] h-[50px]`}
                  />
                  <div className="">css</div>
                </div>
                <div
                  className={`w-[120px] h-[90px] p-[10px] border rounded text-center hover:bg-black hover:text-white transition-all duration-500`}
                >
                  <FaJsSquare
                    className={`w-[110px] h-[50px]`}
                  />
                  <div className="">javascript</div>
                </div>
                <div
                  className={`w-[120px] h-[90px] p-[10px] rounded border text-center hover:bg-black hover:text-white transition-all duration-500`}
                >
                  <FaReact
                    className={`w-[100px] h-[50px]`}
                  />
                  <div className="">react</div>
                </div>
                <div
                  className={`w-[120px] h-[90px] p-[10px] rounded border text-center hover:bg-black hover:text-white transition-all duration-500`}
                >
                  {" "}
                  <FaSass
                    className={`w-[100px] h-[50px]`}
                  />
                  <div className="">sass</div>
                </div>
                <div
                  className={`w-[120px] h-[90px] p-[10px] rounded border text-center hover:bg-black hover:text-white transition-all duration-500`}
                >
                  <img
                    src={material}
                    alt="icon"
                    className={`w-[100px] h-[50px]`}
                  />
                  <div className="">material</div>
                </div>
                <div
                  className={`w-[120px] h-[90px] p-[10px] rounded border text-center hover:bg-white hover:text-black transition-all duration-500`}
                >
                  <img
                    src={tailwind}
                    alt="icon"
                    className={`w-[100px] h-[50px]  hover:text-white `}
                  />
                  <div className="">tailwind</div>
                </div>
              </div>
            </div>
            <div className="hidden wb:flex order-2 relative">
              <FaArrowUp className="absolute top-[-20px] left-[-6px]" />
              <div
                className={`${
                  theme ? "   bg-white b" : " bg-black"
                } w-[4px]  h-[250px]`}
              ></div>
              <FaArrowDown className="absolute bottom-[-20px] left-[-6px]" />
            </div>
            <div className="order-1 sm:order-3 w-[400px] h-[400px] overflow-hidden  rounded ">
              <FaVuejs className=" text-[550px] absolute text-gray-500 -z-10 right-0 wb:hidden " />
              <img
                src={myPhoto}
                alt=""
                className=" rounded-lg drop-shadow-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
