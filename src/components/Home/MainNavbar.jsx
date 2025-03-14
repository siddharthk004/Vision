import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Axios from "../../Axios";

function MainNavbar() {
  const navigate = useNavigate();
  const [wish, setWish] = useState(0);
  const [cart, setCart] = useState(0);
  const [email, setEmail] = useState(localStorage.getItem("email")); // Track email state

  useEffect(() => {
    if (email) {
      Axios()
        .get(`/user/${email}`)
        .then((response) => {
          setWish(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wishlist count:", error);
        });

      Axios()
        .get(`/user/cart/${email}`)
        .then((response) => {
          setCart(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart count:", error);
        });
    }
  }, [email]); // Re-fetch data if email changes

  const handleLogout = () => {
    localStorage.removeItem("email");
    setEmail(null);
    navigate("/signin");
  };

  const handleClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="fixed top-0 left-0 justify-between bg-black text-white shadow-md z-50 ">
      <div className="pl-2 pr-6 bg-green-800 h-[15%] w-screen text-white flex justify-between">
        {/* Left Section */}
        <div className="flex gap-4">
          <button className="flex mt-4" onClick={() => handleClick()}>
            <IoArrowBackCircleSharp className="h-10 w-14" />
          </button>
          <Link className="flex text-center" to="/">
            <img
              className="h-14 m-2 rounded-2xl p-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFs3RH7IdFNLVHHQ_XQo8asDhGCFJYBMh0Hg&s"
              alt=""
            />
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex text-center">
          <h1 className="text-center text-3xl p-4 font-semibold">
            Growing Smarter, Farming Better!
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-row pt-5 text-xl">
          <div className="flex gap-9">
            {/* Wishlist */}
            {wish ? (
              <Link to="/wishlistView" className="flex">
                <FiHeart className="h-8 w-[27px] mr-3 mt-1" />
                <div className="bg-red-500 h-6.1 w-[23px] absolute ml-5 rounded-full">
                  <h1 className="text-sm text-center">{wish}</h1>
                </div>
                <h1 className="ml-2 text-2xl">Wishlist</h1>
              </Link>
            ) : (
              <Link to="/wishlistView" className="flex">
                <FiHeart className="h-8 w-[27px] " />
                <h1 className="ml-2 text-2xl">Wishlist</h1>
              </Link>
            )}

            {/* Cart */}
            {cart ? (
              <Link to="/cart" className="flex">
                <MdOutlineShoppingCart className="h-10 w-[27px] mr-1" />
                <div className="bg-red-500 h-6.1 w-[23px] absolute ml-5 rounded-full">
                  <h1 className="text-sm text-center">{cart}</h1>
                </div>
                <h1 className="ml-3 text-2xl">Cart</h1>
              </Link>
            ) : (
              <Link to="/cart" className="flex">
                <MdOutlineShoppingCart className="h-10 w-[27px]" />
                <h1 className="ml-3 text-2xl">Cart</h1>
              </Link>
            )}

            {/* Login / Logout */}
            {email ? (
              <button onClick={handleLogout} className="flex text-red-600">
                <LuLogIn className="h-8 w-[27px]" />
                <h1 className=" ml-2 text-2xl">Logout</h1>
              </button>
            ) : (
              <Link to="/signin" className="flex">
                <LuLogIn className="h-8 w-[27px]" />
                <h1 className=" ml-2 text-2xl">Login</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
