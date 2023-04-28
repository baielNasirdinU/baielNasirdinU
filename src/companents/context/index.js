import React, { Component, createContext } from "react";
export const themContext = createContext();

class themContextProvider extends Component {
  state = {
    isLight: true,
    light: {
      ui: "white",
      bg: "black",
    },
    dark: { ui: "black", bg: "white" },
  };
  render() {
    return (
      <themContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </themContext.Provider>
    );
  }
}

export default themContextProvider;
