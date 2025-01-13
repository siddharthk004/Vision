import React from "react";
import { FiHeart } from "react-icons/fi"; 
import { LuLogIn } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp,IoArrowForwardCircle } from "react-icons/io5";
import { useState } from "react";

function MainNavbar() {  
  const navigate = useNavigate();
  const [wish,setwish] = useState(0);
  const handleClick = () => {
    navigate(-1); // Go back to previous page
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="pl-2 pr-6 bg-green-800 h-[15%] w-full text-white flex justify-between">
        <div className="flex gap-4">
        <button className="flex mt-4" onClick={()=>handleClick()} ><IoArrowBackCircleSharp className="h-10 w-14" /></button>
        <Link className="flex text-center" to="/">
          <img
            className="h-14 m-2 rounded-2xl p-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFs3RH7IdFNLVHHQ_XQo8asDhGCFJYBMh0Hg&s"
            alt=""
          />
        </Link>
        </div>
        <div className="flex text-center">
          <h1 className="text-center text-3xl p-4 font-semibold">
            Growing Smarter, Farming Better !
          </h1>
        </div>
        <div className="flex flex-row pt-5 text-xl">
          <div className="flex gap-9">
            <div className="flex">
              <FiHeart className="h-8 w-[27px] mr-3 mt-1" /><div className="bg-red-500 h-6.1 w-[23px] absolute ml-5 rounded-full"><h1 className="text-x  text-center">{wish}</h1></div>
              <h1 className="ml-2 text-2xl">Wishlist</h1>
            </div>
            <div className="flex">
              <MdOutlineShoppingCart className="h-8 w-[27px]" />
              <h1 className="ml-3 text-2xl">Cart</h1>
            </div>
            <Link to="/signin" className="flex">
              <LuLogIn className="h-8 w-[27px]" />
              <h1 className="ml-2 text-2xl">Login</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
