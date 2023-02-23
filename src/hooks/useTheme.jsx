import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
//
// import React from "react";

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used in ThemeProvider");
  }

  return context;
}

export default useTheme;
