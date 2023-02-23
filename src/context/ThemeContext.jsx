import { createContext } from "react";
import { useReducer } from "react";
export const ThemeContext = createContext();

const handleState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleState, {
    color: "white",
  });

  const changeColar = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColar }}>
      {children}
    </ThemeContext.Provider>
  );
};
