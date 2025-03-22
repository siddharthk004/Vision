import React from "react";

function Offer({data,index}) {
  return (
    <div key={index} className="flex h-[11vw] w-1/3 bg-emerald-600 p-[1vw]">
        <img className="ml-[5vw] h-[9vw] w-[20vw]" src={data.url} />
    </div>
  );
}

export default Offer;
