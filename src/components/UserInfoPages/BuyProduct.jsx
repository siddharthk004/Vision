import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../Home";

function BuyProduct() {
  const { state } = useLocation();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { productname, afterdiscount } = state;

  const handlePayment = () => {
    navigate("/payment", { state: { count, productname, afterdiscount } });
  }; 
  //   productname, productcompanyname, productimage, beforediscount, afterdiscount,  discount
  return (
    <div className="bg-green-200 h-[93vh] w-full">
      <Home />
      <div className="flex justify-center items-center mt-20 ">
        <div className="bg-white shadow-2xl p-10 rounded-lg">
          <img
            src={state.productimage}
            alt={state.productname}
            className="h-60 mx-auto"
          />
          <h1 className="text-2xl font-bold text-center mt-4">
            {state.productname}
          </h1>
          <p className="text-center text-gray-500">
            {state.productcompanyname}
          </p>
          <p className="text-center text-green-600 text-xl font-semibold mt-2">
            ₹{state.afterdiscount}
          </p>
          <p className="text-center text-red-400 line-through">
            ₹{state.beforediscount}
          </p>
          <div className="flex items-center justify-center mt-4">
            <button
              className="px-4 py-2 bg-red-200 rounded-l"
              disabled={count <= 1}
              onClick={() => setCount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="px-4 py-2 border">{count}</span>
            <button
              className="px-4 py-2 bg-green-200 rounded-r"
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
