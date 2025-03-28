import React, { useState } from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart, MdCurrencyRupee } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../Axios";
import "../components/Card.css";

function Card({ data, index }) {
  const navigate = useNavigate();
  const [isWishlistAdded, setIsWishlistAdded] = useState(false);
  const [isCartAdded, setIsCartAdded] = useState(false);

  const checkEmailAndRedirect = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return null;
    }
    return token;
  };

  // ✅ Add to Wishlist
  const addToWishlist = async () => {
    const token = checkEmailAndRedirect();
    if (!token || isWishlistAdded) return;

    setIsWishlistAdded(true); // Optimistic UI update

    try {
      await Axios().post(
        `/wishlist/add`,
        { productId: data.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error adding to wishlist:", error.response?.data || error.message);
      setIsWishlistAdded(false); // Revert on failure
    }
  };

  // ✅ Add to Cart
  const addToCart = async () => {
    const token = checkEmailAndRedirect();
    if (!token || isCartAdded) return;

    setIsCartAdded(true); // Optimistic UI update

    try {
      await Axios().post(
        `/addToCart`,
        { productId: data.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      setIsCartAdded(false); // Revert on failure
    }
  };

  return (
    <div key={index} className="p-[1vw] flex flex-wrap">
      <div className="w-[14vw] h-[20vw] overflow-hidden bg-white rounded-[1vw] border border-zinc-300 shadow-lg">
        <div className="cut-bottom-left flex">
          <div className="flex w-[1vw]">
            <p className="text-[.8vw] p-[.3vw] ml-[.2vw] font-bold">{data.discount}%</p>
            <p className="text-[.8vw] pt-[.3vw] font-bold">OFF</p>
          </div>

          {/* ✅ Wishlist Button with Disabled Styling */}
          <button
            onClick={addToWishlist}
            className={`h-[1.7vw] w-[3vw] mt-[.5vw] ml-[9.2vw] rounded-xl ${
              isWishlistAdded ? "opacity-50 cursor-not-allowed" : "hover:opacity-100"
            }`}
            disabled={isWishlistAdded}
          >
            <FiHeart className="h-[1.7vw] w-[3vw] opacity-75 text-zinc-900" />
          </button>
        </div>

        <Link to={`/user/product/id/${data.id}`}>
          <div className="h-[3vw] w-[6vw] justify-items-center ml-[4vw]">
            <img
              src={data.productimage}
              alt="Product"
              className="w-[16vw] h-[7vw] transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* ✅ Display Quantity-Based Labels */}
          {data.quantity === 0 ? (
            <p className="bg-red-100 text-red-700 font-semibold w-[5vw] mt-[4.3vw] pl-[.3vw] rounded-sm">
              Sold Out
            </p>
          ) : data.quantity < 5 ? (
            <p className="bg-green-700 text-[.9vw] text-white font-semibold w-[9.3vw] mt-[4vw] pl-[.3vw] rounded-sm">
              Limited Time Deal ✨
            </p>
          ) : (
            <p className="mt-[5.7vw]"></p>
          )}

          <p className={`mt-[.3vw] font-semibold ml-[.5vw] ${data.productname.length > 15 ? "text-[0.9vw]" : "text-[1.1vw]"}`}>
            {data.productname}
          </p>

          <p className="text-[.8vw] opacity-50 ml-[.5vw]">{data.productcompanyname}</p>

          <p className="text-[1.1vw] mt-[.2vw] ml-[.8vw] font-bold text-green-700">
            {parseInt((data.beforediscount / 100) * (100 - data.discount))} RS
            <s className="ml-[.7vw] text-[.8vw] opacity-50 text-red-500">{data.beforediscount} Rs</s>
          </p>

          <p className="text-[.9vw] flex text-green-700 ml-[.5vw]">
            Save <MdCurrencyRupee className="mt-[.4vw]" />
            {Math.round(data.beforediscount - (data.beforediscount * (100 - data.discount)) / 100)}
          </p>
        </Link>

        <div className="flex gap-[1.7vw] ml-[1.3vw] w-[10vw] justify-center mt-[.4vw] text-zinc-700">
          {/* ✅ Add to Cart Button with Disabled Styling */}
          <button
            onClick={addToCart}
            className={`rounded-md h-[2vw] w-[3vw] flex ${
              isCartAdded ? "opacity-50 cursor-not-allowed" : "hover:opacity-100"
            }`}
            disabled={isCartAdded}
          >
            <MdOutlineShoppingCart className="h-[1.8vw] w-[8vw] mr-[1vw] mt-[.3vw]" />
          </button>

          {/* ✅ Buy Button */}
          <button
            onClick={() => navigate("/buyproduct", { state: data })}
            className={`rounded-md  bg-blue-600 text-white h-[2.5vw] w-[6vw] flex border border-zinc-100 ${
              data.quantity === 0
                ? "text-blue-100 bg-zinc-100 cursor-not-allowed"
                : "hover:bg-blue-500 hover:text-white"
            }`}
          >
            <CgArrowTopRightR className="h-[4vw] w-[1.6vw] pb-[1.7vw] ml-[.6vw] text-[.2vw]" />
            <p className="m-[.3vw]  font-semibold text-[1vw]">Buy</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
