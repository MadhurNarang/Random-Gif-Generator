import React from "react";

import Spinner from "./Spinner";

import useGif from "../hooks/useGif";


const Random = () => {

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center bg-green-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h2 className="uppercase font-bold text-2xl underline ">a random gif</h2>
      <div className="flex items-center justify-center h-[240px]">
        {loading ? <Spinner /> : <img src={gif} style={{ height: '200px' }} />}
      </div>
      <button
        onClick={() => fetchData()}
        className="uppercase bg-yellow-300 rounded-lg w-10/12 font-normal py-2 px-4 text-xl">
        Generate
      </button>
    </div>
  )
};

export default Random;
