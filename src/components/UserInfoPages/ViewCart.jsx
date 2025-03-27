import React, { useState } from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { PiPlusBold } from "react-icons/pi";
import { FaMinus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../Axios";

function ViewCart({data,quantity, onDelete }) {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation
  const [count, setCount] = useState(1);

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

  const handleCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const deleteItemCart = async () => {
    const id = data.id;
    console.log("Deleting item:", id);

    try {
      const token = localStorage.getItem("token");
      const response = await Axios().delete(`/user/DeleteCart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
    <div className="shadow-xl shadow-zinc-200 border-[.1vw] border-zinc-300 w-[46vw] h-40 p-4 mt-[2vw] ml-[2vw] rounded-xl flex justify-between items-center">
      {/* Image & Title */}
      <Link to={`/user/product/id/${data.id}`} className="flex items-center">
        <div>
          <img src={data.productimage} alt={data.productname} className="h-[10vw] p-2 w-[10vw] object-contain rounded-lg" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-semibold text-center">
            {data.productname}
          </h1>
          <h1 className="text-xl font-light text-center text-gray-600">
            {data.productcompanyname}
          </h1>
        </div>
      </Link>

      {/* Price Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-700">{data.afterdiscount} RS</h1>
        <s className="text-xl font-light text-red-700">{data.beforediscount} RS</s>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <div>
        {/* Buy Button */}
        <button
          onClick={handleBuy}
          className="flex mb-2 items-center gap-2 w-[8vw] px-6 py-2 bg-blue-600 text-white rounded-md border border-green-500"
        >
          <CgArrowTopRightR className="w-6 h-6" />
          <span className="text-lg font-bold">Buy</span>
        </button>
        
        <div className="flex w-[8vw] h-[2.5vw] border-[.1vw] border-zinc-900 mt-[.5vw]">
            <div className="w-1/3 h-full bg-red-200 flex justify-center items-center">
              <FaMinus
                className="text-[1.5vw]"
                onClick={handleCount}
                disabled={count <= 1}
              />
            </div>
            <div className="w-1/3 h-full border-l-[.1vw] border-r-[.1vw] border-zinc-900 flex justify-center items-center">
              <h1 className="text-[1.5vw]">{count}</h1>
            </div>
            <div className="w-1/3 h-full bg-green-200 flex justify-center items-center">
              <PiPlusBold
                className="text-[1.5vw]"
                onClick={() => setCount((value) => value + 1)}
              />
            </div>
          </div>
        </div>
        {/* Delete Button */}
        <button onClick={deleteItemCart} className="m-2 rounded-md">
          <MdDeleteOutline className="h-9  w-8 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default ViewCart;
