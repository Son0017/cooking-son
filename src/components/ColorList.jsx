import React from "react";

import useTheme from "../hooks/useTheme";

const colors = ["red", "blue", "orangered"];

function ColorList() {
  const { changeColar } = useTheme();

  return (
    <div className="flex justify-between gap-3">
      {colors.map((color) => {
        return (
          <div
            key={color}
            onClick={() => {
              changeColar(color);
            }}
            style={{
              background: `${color}`,
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default ColorList;
