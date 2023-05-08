import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemContextProvider from "../context";
import Navbar from "../header/Navbar";
import {
  Blog,
  Hero,
  Code,
  Contact,
  Website,
  About,
} from "../pages";

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
                <Blog theme={theme} />
                <Code theme={theme} />
                <Website theme={theme} />
                <Contact theme={theme} />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/about"
            element={<About theme={theme} />}
          />
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
    </>
  );
};

export default App;
