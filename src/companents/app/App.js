import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemContextProvider from "../context";
import Navbar from "../header/Navbar";
import { motion } from "framer-motion"
import {BsFillBalloonHeartFill}from 'react-icons/bs'

import {
  Hero,
  About,
  Skills,
  Blog,
  Code,
  Website,
  Contact,
} from "../pages";
import { FaGithubSquare, FaPhoneVolume } from 'react-icons/fa'

const App = () => {
  const [theme, setTheme] = useState(false);
  const [hight] = useState(true)
  ontoggle = () => {
    setTheme((prevState) => {
      prevState = !theme;
    });
  };

  return (
    <>
    <motion.div className="absolute" animate={{}}>
      <BsFillBalloonHeartFill /></motion.div>
      <ThemContextProvider>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/"
            index
            expand
            element={
              <>
                <Hero theme={theme} />
                <About theme={theme} />
                <Skills theme={theme} />
                <Blog theme={theme} />
                <Code theme={theme} />
                <Website theme={theme} />
                <Contact theme={theme} />
              </>
            }
          />
          <Route
            path="/about"
            element={<About theme={theme} style={hight} />}
          />
          <Route
            path="/skills"
            element={<Skills theme={theme} style={hight} />}
          />
          <Route path="/blog"
            element={<Blog theme={theme} style={hight} />} />
          <Route
            path="/Code"
            element={<Code theme={theme} style={hight} />}
          />
          <Route
            path="/Website"
            element={<Website theme={theme} style={hight} />}
          />
          <Route
            path="/Contact"
            element={<Contact theme={theme} style={hight} />}
          />
        </Routes>
      </ThemContextProvider>
      <div className={`fixed hidden sm:flex left-[-75px] hover:left-0 top-[42%]  duration-500 `}>
        <a href="https://github.com/baielNasirdinU" target="_blank" rel="noreferrer noopener"
          className="flex w-[120px] h-[50px] p-2 justify-between  bg-blue-800 ">
          <span className="text-[22px] text-white">
            github</span><span><FaGithubSquare className="w-[100%] h-[100%]  text-red-100 ml-2" /></span></a></div>

      <div className={`fixed hidden sm:flex left-[-85px] hover:left-0 top-[50%]  duration-500 `}>
        <Link to="tel:+996220089937"
          className="flex w-[130px] h-[50px] p-2 justify-between  bg-blue-800 "><span className="text-[22px] text-white">
            call me</span><span><FaPhoneVolume className="w-[100%] h-[100%]  text-red-100 ml-2" /></span></Link></div>


    </>
  );
};

export default App;
