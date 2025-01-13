import React from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgArrowTopRightR } from "react-icons/cg";
import { Link } from "react-router-dom";

function Cardpest({data,index}) {
  return (
    <div key={index} className="p-2 pt-5 pl-6">
      <Link to={`/ProductDetailspest/${data.id}`}>
      
      <div className="h-[35vh] w-[26vh] bg-green-100 rounded-3xl border border-green-400 shadow-2xl">
        <div className="flex m-[5px]">
          <div className=" h-8 bg-yellow-300 w-[130px] overflow-hidden rounded-lg">
            <h1 className="text-sm p-[5px] ml-1 font-lightbold ">{data.discount}% OFF</h1>
          </div>
          <div className="h-8 w-[80px] ml-[13vh] mt-2 rounded-xl">
            <FiHeart className="h-10 w-8 ml-1" />
          </div>
        </div>
        <div className="h-[15vh] w-[18vh] ml-10 leading-none">
          <img
            src={data.productimage}
            alt="Product Image"
            className="w-[16vh] h-[15vh] rounded-3xl"
          />
        </div>
        <h1 className="text-xl m-2 font-semibold leading-none text-center">{data.productname}</h1>
        <h1 className="text-sm text-center leading-none">{data.productcompanyname}</h1>
        <h1 className="text-lg  mb-2 ml-20 font-bold text-green-700">
          {data.afterdiscount} RS<s className="ml-3 text-sm text-black">{data.beforediscount} Rs</s>
        </h1>
        <div className="flex gap-5 ml-9 mt-2 text-green-900">
        <div className="rounded-md bg-green-300 h-10 w-20 flex border-green-500 border">
            <MdOutlineShoppingCart className="h-10 w-8 ml-1" />
            <h1 className="mt-2 ml-1 font-bold">Add</h1>
          </div>
          <div className="rounded-md bg-blue-600 text-white h-10 w-20 flex border-green-500 border">
            <CgArrowTopRightR className="h-10 w-7 text-sm ml-1" />
            <h1 className="mt-2 ml-2 font-bold">Buy</h1>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Cardpest;
