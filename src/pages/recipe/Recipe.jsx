import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
// import useFetch from "../../hooks/useFetch";
import { getOne } from "../../firebase/firebase";
const Recipe = () => {
  const { id } = useParams();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipie = async () => {
      try {
        setIsPending(true);
        const data = await getOne(id);
        setData(data);
        setIsPending(false);
      } catch {
        setIsPending(false);
        setError(err);
      }
    };
    getRecipie();
  }, []);
  return (
    <>
      {isPending && <Loading />}
      {data && (
        <div>
          <h2 className="font-bold text-5xl text-center mb-8">{data.title}</h2>
          <p className="flex justify-center capitalize mb-3">
            <span className="p-1 bg-blue-700 text-white rounded leading-none">
              cookingTime:
            </span>
            <span className="p-1 leading-none">{data.cookingTime}</span>
          </p>
          <p className="flex justify-center capitalize mb-3 gap-1">
            <span className="p-1 bg-blue-700 text-white rounded leading-none">
              ingredients :
            </span>
            {data.ingredients.map((ing) => {
              return (
                <span className="p-1 text-black  leading-none">{ing} ,</span>
              );
            })}
          </p>
          <p className="mb-3">
            <span className="p-1 capitalize bg-blue-700 text-white rounded leading-none">
              method:
            </span>
            <span className="p-1 leading-none">{data.method}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Recipe;
