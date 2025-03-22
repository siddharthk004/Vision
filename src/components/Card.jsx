import React, { useState } from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../Axios";
import { MdCurrencyRupee } from "react-icons/md";
import "../components/Card.css";

function Card({ data, index }) {
  const navigate = useNavigate();
  const [isWishlistAdded, setIsWishlistAdded] = useState(false); // Track if the product is in the wishlist
  const [isCartAdded, setIsCartAdded] = useState(false); // Track if the product is in the cart

  const handleBuy = () => {
    const email = checkEmailAndRedirect();
    if (!email) return; // Prevent execution if email is missing or already added
    navigate("/buyproduct", {
      state: {
        productname: data.productName,
        productcompanyname: data.productCompanyName,
        productimage: data.productImage,
        beforediscount: data.beforediscount,
        afterdiscount: data.afterdiscount,
        discount: data.discount,
      },
    });
  };

  const checkEmailAndRedirect = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/signin"); // Redirect to login if email is missing
      return null;
    }
    return email;
  };

  const addToWishlist = async () => {
    const email = checkEmailAndRedirect();
    if (!email || isWishlistAdded) return; // Prevent execution if email is missing or already added

    const wishlistData = {
      productname: data?.productName || "Unknown",
      productcompanyname: data?.productCompanyName || "Unknown",
      productimage: data?.productImage || "placeholder.jpg",
      beforediscount: data?.beforediscount || 0,
      afterdiscount: data?.afterdiscount || 0,
      discount: data?.discount || 0,
    };

    try {
      const response = await Axios().post(`/user/wishlist`, wishlistData, {
        params: { email }, // Pass email as a query parameter
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      setIsWishlistAdded(true); // Mark product as added to the wishlist
    } catch (error) {
      console.error(
        "Error adding to wishlist:",
        error.response?.data || error.message
      );
    }
  };

  const addToCart = async () => {
    const email = checkEmailAndRedirect();
    if (!email || isCartAdded) return; // Prevent execution if email is missing or already added

    const cartData = {
      productname: data?.productName || "Unknown",
      productcompanyname: data?.productCompanyName || "Unknown",
      productimage: data?.productImage || "placeholder.jpg",
      beforediscount: data?.beforediscount || 0,
      afterdiscount: data?.afterdiscount || 0,
      discount: data?.discount || 0,
    };

    try {
      const response = await Axios().post(`/user/cart`, cartData, {
        params: { email }, // Pass email as a query parameter
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      setIsCartAdded(true); // Mark product as added to the cart
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div key={index} className="p-[1vw] flex flex-wrap">
      <div className="w-[14vw] h-[19.4vw] overflow-hidden bg-white rounded-[1vw] border border-zinc-300 border-[.1vw] shadow-lg shadow-zinc-300">
        <div className="cut-bottom-left flex">
          <div className="flex w-[1vw]">
            <p className="text-[.8vw] p-[.3vw] ml-[.2vw] font-lightbold ">
              {data.discount}%
            </p>
            <p className="text-[.8vw] pt-[.3vw] font-lightbold ">OFF</p>
          </div>

          <button
            onClick={addToWishlist}
            className={`h-[.4vw] w-[.2vw] mt-[.5vw] ml-[9.2vw] rounded-xl ${
              isWishlistAdded ? "opacity-0 cursor-not-allowed" : ""
            }`}
            disabled={isWishlistAdded} // Disable button if already added
          >
            <FiHeart className="h-[1.7vw] w-[3vw] opacity-75 text-zinc-900" />
          </button>
        </div>

        <Link to={`/ProductDetails/${data.id}`}>
          <div className="h-[3vw] w-[6vw] justify-items-center ml-[4vw] leading-none">
            <img
              src={data.productimage}
              alt="Product"
              className="w-[16vw] h-[7vw] transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {data.quantity === 0 ? (
            <p className="text-[.8vw] mt-[4vw] ml-[.5vw] font-lightbold ">
              <p className="bg-red-100 font-semibold text-red-700 w-[4vw] mt-[4.3vw] pl-[.3vw] rounded-sm">
                Sold Out
              </p>
            </p>
          ) : data.quantity < 5 ? (
            <p className="text-[.8vw] mt-[4vw] ml-[.5vw] font-lightbold ">
              <p className="bg-green-700 text-white w-[8.4vw] font-semibold mt-[.2vw] pl-[.3vw] rounded-sm">
                Limited Time Deal ✨
              </p>
            </p>
          ) : (
            <p className="text-[.8vw] mt-[5.7vw] "></p>
          )}
          <p
            className={`mt-[.3vw] font-semibold leading-none ml-[.5vw] ${
              data.productname.length > 15 ? "text-[0.9vw]" : "text-[1.1vw]"
            }`}
          >
            {data.productname}
          </p>

          <p className="text-[.8vw] opacity-50 ml-[.5vw] mt-[.2vw] leading-none">
            {data.productcompanyname}
          </p>
          <p className="text-[1.1vw] mt-[.2vw] ml-[.8vw] font-bold text-green-700">
            {parseInt((data.beforediscount / 100) * (100 - data.discount))} RS
            <s className="ml-[.7vw] text-[.8vw] opacity-50 text-red-500">
              {data.beforediscount} Rs
            </s>
          </p>
          <p className="text-[.9vw] flex text-green-700 ml-[.5vw]">
            save <MdCurrencyRupee className="mt-[.4vw]" />
            {Math.round(
              data.beforediscount -
                (data.beforediscount * (100 - data.discount)) / 100
            )}
          </p>
        </Link>
        <div className="">
          <div className="flex gap-[.2vw] ml-[1.3vw] w-[10vw] justify-center mt-[.4vw] text-zinc-700">
            <button
              onClick={addToCart}
              className={`rounded-md h-[2vw] w-[3vw] flex ${
                isCartAdded ? "text-zinc-200 cursor-not-allowed" : ""
              }`}
              disabled={isCartAdded}
            >
              <MdOutlineShoppingCart className="h-[1.8vw] w-[8vw] mr-[1vw] mt-[.3vw]" />
            </button>
            <button
              onClick={handleBuy}
              className={`rounded-md bg-blue-600 text-white h-[2.5vw] w-[6vw] flex border-zinc-100 border ${
                data.quantity === 0
                  ? "text-blue-100 bg-zinc-100 cursor-not-allowed"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              <CgArrowTopRightR className="h-[4vw] w-[1.6vw] pb-[1.7vw] ml-[.6vw] text-[.2vw]" />
              <p className="m-[.3vw] font-semibold text-[1vw]">Buy</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
