import React from "react";

function Offer({data,index}) {
  return (
    <div key={index} className="flex h-20 w-1/3 bg-gradient-to-r from-pink-400 border-b-2 border-indigo-500 via-blue-300 to-pink-400">
      <div className="text-xl text-center font-bold p-3 pl-[10vh]">
        <h1>{data.text1}</h1>
        <h1>{data.text2}</h1>
      </div>
      <div>
        <img className="ml-40 h-20" src={data.url} />
      </div>
    </div>
  );
}

export default Offer;
