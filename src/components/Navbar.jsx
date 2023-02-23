import React from "react";
import { Link } from "react-router-dom";

import useTheme from "../hooks/useTheme";

function Navbar() {
  const { color } = useTheme();

  return (
    <div
      style={{ background: `${color}` }}
      className="border-grey-400 p-3 rounded border-solid border-2 shadow-lg shadow-grey mb-[60px]"
    >
      <nav className="py-3 flex justify-between items-center  max-w-screen-lg mx-auto px-3">
        <h1 className="font-bold font text-4xl">
          <Link to={"/"}>Son cooking</Link>
        </h1>
        <ul>
          <li className=" bg-green-700 border-green-700  rounded border-solid border-2">
            <Link
              className="text-white py-2 px-7 block  hover:bg-white hover:text-black"
              to={"/create"}
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
