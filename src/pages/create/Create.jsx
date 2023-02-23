import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { postDoc } from "../../firebase/firebase";

function Create() {
  const [data, setData] = useState({
    title: "",
    ingredients: [],
    method: "",
    cookingTime: "",
  });
  const [ingredient, setIngradient] = useState("");
  const navigate = useNavigate();

  const handleIng = (e) => {
    e.preventDefault();
    if (!data.ingredients.includes(ingredient)) {
      setData({ ...data, ingredients: [...data.ingredients, ingredient] });
      setIngradient("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const recipes = postDoc(data);
    if (recipes) {
      navigate("/");
    }
    setData({
      title: "",
      ingredients: [],
      method: "",
      cookingTime: "",
    });
  };
  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="border-grey-400 p-11 w-1/2 rounded border-solid border-2 shadow-lg shadow-grey"
      >
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col gap-4 capitalize">
            <label className="text-2xl" htmlFor="title">
              <p className="mb-3">title</p>
              <div className="border-grey-400 p-1  rounded border-solid border-2">
                <input
                  type="text"
                  id="title"
                  className="focus:outline-none"
                  onChange={(e) => {
                    setData({ ...data, title: e.target.value });
                  }}
                />
              </div>
            </label>
            <label className="text-2xl" htmlFor="method">
              <p className="mb-3">method</p>
              <div className="border-grey-400 p-1 rounded border-solid border-2">
                <input
                  type="text"
                  id="method"
                  className="focus:outline-none"
                  onChange={(e) => {
                    setData({ ...data, method: e.target.value });
                  }}
                />
              </div>
            </label>
            <label className="text-2xl" htmlFor="cookingTime">
              <p className="mb-3">cooking Time</p>
              <div className="border-grey-400 p-1 rounded border-solid border-2">
                <input
                  type="number"
                  id="cookingTime"
                  className="focus:outline-none numIn"
                  onChange={(e) => {
                    setData({ ...data, cookingTime: e.target.value });
                  }}
                />
              </div>
            </label>
            <label className="text-2xl" htmlFor="ingredients">
              <p className="mb-3">ingredients</p>
              <div className="flex gap-2">
                <div className="focus:outline-none border-grey-400 p-1  rounded border-solid border-2">
                  <input
                    type="text"
                    className="focus:outline-none"
                    onChange={(e) => {
                      setIngradient(e.target.value);
                    }}
                    value={ingredient}
                  />
                </div>
                <button
                  onClick={handleIng}
                  className="bg-green-700 border-green-700   rounded border-solid border-2 inline-block"
                >
                  <span className="text-white px-1 text-base block">add</span>
                </button>
              </div>
            </label>
          </div>
        </div>
        <button className=" bg-green-700 border-green-700  rounded border-solid border-2 inline-block">
          <p className="text-white py-2 px-7 block  hover:bg-white hover:text-black">
            Submit
          </p>
        </button>
      </form>
    </div>
  );
}

export default Create;
