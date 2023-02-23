// // import React from "react";
// import { useEffect, useState } from "react";
// function useFetch(url, dataMethod = "GET") {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isPending, setIsPending] = useState(false);
//   const [options, setOptions] = useState(null);
//   const postData = (data) => {
//     setOptions({
//       method: dataMethod,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   };

//   useEffect(() => {
//     const request = async (fetchOptions) => {
//       try {
//         setIsPending(true);
//         const response = await fetch(url, { ...fetchOptions });
//         if (!response.ok) {
//           throw new Error();
//         }
//         const data = await response.json();
//         setIsPending(false);
//         setData(data);
//       } catch (err) {
//         setIsPending(false);
//         setError(err.messages);
//       }
//     };
//     if (dataMethod == "GET") {
//       request();
//     }
//     if (dataMethod == "POST" && options) {
//       request(options);
//     }
//   }, [url, options, dataMethod]);

//   return { data, error, isPending, postData };
// }

// export default useFetch;
