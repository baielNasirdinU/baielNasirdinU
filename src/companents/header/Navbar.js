import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import styles from "../util/style";
import { RiCloseCircleLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const data = [
    {
      id: 1,
      name: "home",
      href: "/",
    },
    {
      id: 2,
      name: "about me",
      href: "/about ",
    },
    {
      id: 3,
      name: "skills",
      href: "/skills ",
    },
    {
      id: 4,
      name: "blog",
      href: "/blog",
    },
    {
      id: 5,
      name: "code examples",
      href: "/code",
    },
    {
      id: 6,
      name: "websites",
      href: "/website",
    },
    {
      id: 7,
      name: "contact",
      href: "/contact",
    },
  ];

  const [toggleNav, setToggle] = useState(true);
  const [active, setActive] = useState("home");

  const onLight = () => {
    setTheme((prevState) => !prevState);
  };
  const onToggle = () => {
    setToggle(!toggleNav);
  };
  const activeHandler = (id) => {
    setActive(id);

    setToggle((prevState) => !prevState);
  };

  return (
    <div className={"sticky top-0 z-20"}>
      <header
        className={
          theme ? "darkNavbar" : "light border-b-4 Navbar"
        }
      >
        <div className={`${styles.container} `}>
          <nav className={`${styles.flexBetween} h-20  `}>
            <div className="">
              <Link
                to="/"
                className={`${styles.textC} text-lg font-semibold border-b-4  border-indigo-500 rounded-lg tracking-widest`}
              >
                bn
              </Link>
            </div>
            <ul
              className={`sm:${styles.flexBetween} ${styles.flexGap} ${styles.textC} text-lg sm:flex hidden list-none `}
            >
              {data.map((value) => (
                <li key={value.id}>
                  <Link
                    to={value.href}
                    onClick={() => activeHandler(value.id)}
                    className={`hover:text-green-500 transition-all duration-500     ${active === value.id
                      ? "text-blue-900 "
                      : ""
                      }`}
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className={`${styles.flexBetween}  gap-8`}
            >
              {theme ? (
                <FaSun
                  onClick={onLight}
                  className={`${styles.textOrange} hover:scale-[2] transition-all duration-500`}
                />
              ) : (
                <FaMoon
                  onClick={onLight}
                  className={`${styles.textOrange} hover:scale-[2] transition-all duration-500`}
                />
              )}</button>
            <div className="">
              {toggleNav ? (
                <FcMenu
                  onClick={onToggle}
                  className="sm:hidden flex text-[25px] text-white-500 text-blue-900"
                />
              ) : (
                <RiCloseCircleLine
                  onClick={onToggle}
                  className="sm:hidden flex text-[25px] text-rose-500"
                />
              )}
            </div>
            <div
              className={`bg-slate-30  absolute top-20  ${toggleNav ? "hidden" : "flex"
                } p-6 left-0 right-0 sm:hidden  bg-slate-500 sidebar `}
            >
              <ul
                className={`sm:${styles.flexBetween}  ${styles.textC}   text-lg  list-none flex-col text-center  m-auto  `}
              >
                {data.map((value, idx) => (
                  <li key={value.id} className="p-3">
                    <Link
                      to={value.href}
                      onClick={() =>
                        activeHandler(value.id)
                      }
                      className={`hover:text-green-500 transition-all duration-500 z-30 
                        
                        ${active === value.id
                          ? "text-green-900"
                          : ""
                        }`}
                    >
                      {value.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>



          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
