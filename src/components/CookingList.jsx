import React, { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import ColorList from "./ColorList";
// import { getData } from "../firebase/firebase";
import { BsMoon } from "react-icons/bs";
import { db, deleteItem } from "../firebase/firebase";
import "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function CookingList() {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    onSnapshot(collection(db, "recipies"), (docs) => {
      if (!docs.empty) {
        const data = [];
        docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
        setIsPending(false);
      } else {
        setIsPending(false);
        setError("No recipies to lead");
      }
    });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="text-3xl">
          <BsMoon />
        </div>
        <ColorList />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {error && <div>{error}</div>}
        {isPending && <Loading />}
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="border-grey-400 p-3 rounded border-solid border-2 shadow-lg shadow-grey"
              >
                <h3 className="font-bold text-2xl text-center mb-3 capitalize">
                  {item.title}
                </h3>
                <p className="flex justify-center capitalize mb-3">
                  <span className="p-1 bg-blue-700 text-white rounded leading-none">
                    cookingTime:
                  </span>
                  <span className="p-1 leading-none">{item.cookingTime}</span>
                </p>
                <p className="mb-3">
                  <span className="p-1 capitalize bg-blue-700 text-white rounded leading-none">
                    method:
                  </span>
                  <span className="p-1 leading-none">
                    {item.method.length > 100
                      ? `${item.method.substring(0, 120)}...`
                      : item.method}
                  </span>
                </p>
                <div className="flex gap-2 items-center">
                  <div className=" bg-green-700 border-green-700  rounded border-solid border-2 inline-block">
                    <Link
                      className="text-white py-1 px-2 block  hover:bg-white hover:text-black"
                      to={`/recipe/${item.id}`}
                    >
                      Learn more
                    </Link>
                  </div>
                  <div className=" bg-red-700 border-red-700  rounded border-solid border-2 inline-block">
                    <button
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                      className=" text-white py-1 px-2 block  hover:bg-white hover:text-black"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CookingList;
