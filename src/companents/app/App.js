import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemContextProvider from "../context";
import Navbar from "../header/Navbar";
import {
  Hero,
  About,
  Skills,
  Blog,
  Code,
  Website,
  Contact,
} from "../pages";
import { FaGithubSquare } from 'react-icons/fa'

const App = () => {
  const [theme, setTheme] = useState(false);
  ontoggle = () => {
    setTheme((prevState) => {
      prevState = !theme;
    });
  };
  // console.log(theme);
  return (
    <>
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
            element={<About theme={theme} />}
          />
          <Route
            path="/skills"
            element={<Skills theme={theme} />}
          />
          <Route path="/blog"
            element={<Blog theme={theme} />} />
          <Route
            path="/Code"
            element={<Code theme={theme} />}
          />
          <Route
            path="/Website"
            element={<Website theme={theme} />}
          />
          <Route
            path="/Contact"
            element={<Contact theme={theme} />}
          />
        </Routes>
      </ThemContextProvider>
      <div className={`fixed hidden sm:flex left-[-75px] hover:left-0 top-[50%]  duration-500 `}> <a href="https://github.com/baielNasirdinU" target="_blank"
        className="flex w-[120px] h-[50px] p-2 justify-between  bg-blue-800 "><span className="text-[22px] text-white">
          github</span><span><FaGithubSquare className="w-[100%] h-[100%]  text-red-100" /></span></a></div>
    </>
  );
};

export default App;
