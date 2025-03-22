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
    <div className="fixed top-0 left-0 justify-between bg-black shadow-md z-50 ">
      <div className="pl-2 pr-[1vw] bg-white h-[4vw] w-screen flex justify-between">
        {/* Left Section */}
        <div className="flex pr-[2vw]">
          <Link className="flex text-center" to="/">
            <img
              className="h-[3.5vw] m-[.3vw] rounded-2xl p-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFs3RH7IdFNLVHHQ_XQo8asDhGCFJYBMh0Hg&s"
              alt=""
            />
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex text-center">
          <p className="text-center text-[1.58vw] p-[.7vw] font-semibold">
            Growing Smarter, Farming Better!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-row pt-[.9vw] text-[.2vw]">
          <div className="flex gap-[1.6vw]">
            {/* Wishlist */}
            {wish ? (
              <Link to="/wishlistView" className="flex">
                <FiHeart className="h-[1vw] w-[2vw] mr-[.2vw] mt-[.1vw]" />
                <div className="bg-red-500 h-6.1 w-[23px] absolute ml-[.7vw] rounded-full">
                  <h1 className="text-[1vw] text-center">{wish}</h1>
                </div>
                <p className="ml-2 text-[1.2vw] ">Wishlist</p>
              </Link>
            ) : (
              <Link to="/wishlistView" className="flex">
                <FiHeart className="h-[2vw] w-[1.54vw] " />
                <p className="ml-[.3vw] text-[1.2vw] ">Wishlist</p>
              </Link>
            )}

            {/* Cart */}
            {cart ? (
              <Link to="/cart" className="flex">
                <MdOutlineShoppingCart className="h-[2vw] w-[27px] mr-[.1vw]" />
                <div className="bg-red-500 h-6.1 w-[23px] absolute ml-[.7vw] rounded-full">
                  <h1 className="text-[1.2vw] text-center">{cart}</h1>
                </div>
                <h1 className="ml-3 text-[1.2vw]">Cart</h1>
              </Link>
            ) : (
              <Link to="/cart" className="flex">
                <MdOutlineShoppingCart className="h-[2vw] w-[1.54vw]" />
                <p className="ml-[.3vw] text-[1.2vw]">Cart</p>
              </Link>
            )}

            {/* Login / Logout */}
            {email ? (
              <button onClick={handleLogout} className="flex text-red-600">
                <LuLogIn className="h-[2vw] w-[1vw]" />
                <h1 className=" ml-[.7vw] text-[1.2vw]">Logout</h1>
              </button>
            ) : (
              <Link to="/signin" className="flex">
                <LuLogIn className="h-[2vw] w-[1.54vw]" />
                <p className=" ml-[.4vw] text-[1.2vw]">Login</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
