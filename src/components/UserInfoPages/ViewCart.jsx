import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import Axios from "../../Axios";

function ViewCart({ data, ind, onDelete }) {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const handleBuy = () => {
    navigate("/buyproduct", {
      state: {
        productname: data.productname,
        productcompanyname: data.productcompanyname,
        productimage: data.productimage,
        beforediscount: data.beforediscount,
        afterdiscount: data.afterdiscount,
        discount: data.discount,
      },
    });
  };
  const deleteItemCart = async () => {
    const id = data.id;
    console.log("Deleting item:", id);

    try {
      const response = await Axios().delete(`/user/DeleteCart/${id}`);
      console.log("Response:", response.data);

      // Notify parent component to remove the item from the list
      onDelete(id);
    } catch (error) {
      console.error(
        "Error deleting item:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="" key={ind}>
      <div className="flex justify-between shadow-2xl shadow-zinc-600 border-2 border-zinc-400 w-[91vh] h-40 p-4 mt-14 ml-14 mr-8 rounded-xl">
        <div className="h-full w-30 rounded-xl">
          <img src={data.productimage} className="h-full ml-[25%]" />
        </div>
        <div className="h-full w-80">
          <h1 className="text-3xl w-[100%] mt-4 ml-3 mb-4 font-semibold leading-none text-center">
            {data.productname}
          </h1>
          <h1 className="text-xl font-lightbold leading-none text-center">
            {data.productcompanyname}
          </h1>
        </div>
        
        <div className="flex gap-10">
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-green-700">
            {data.afterdiscount} RS
          </h1>
          <s className="text-xl font-lightbold text-red-700">
            {data.beforediscount} RS
          </s>
        </div>
        <div className="gap-4 flex">
          <button
            onClick={handleBuy}
            className="rounded-md bg-blue-600 text-white gap-2 h-12 w-24 flex mt-8 border-green-500 border"
          >
            <CgArrowTopRightR className="h-10 mt-1 ml-1 w-10" />
            <h1 className="text-xl text-center mt-2 font-bold">Buy</h1>
          </button>
          <button onClick={deleteItemCart} className="mr-2 mb-2">
            <div className="rounded-md border-2 border-red-500 text-white h-12 w-12 flex border-green-500 border">
              <MdDeleteOutline className="h-12 w-10 ml-1 text-sm text-red-500" />
            </div>
          </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default ViewCart;
