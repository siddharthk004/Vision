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
  const [logo, setLogo] = useState([]);
  const [cart, setCart] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token")); 

  useEffect(() => {
    if (!token) return; // Prevent API calls if no token is present

    // Fetch wishlist count
    Axios().get(`/user/wishlistCount`, {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    })
    
      .then((response) => setWish(response.data))
      .catch((error) => console.error("Error fetching wishlist count:", error));

    // Fetch cart count
    Axios().get(`/user/cartCount`, {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    })
    
      .then((response) => setCart(response.data))
      .catch((error) => console.error("Error fetching cart count:", error));
  }, [token]); // Re-run when token changes

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await Axios().get("/admin/add");
        setLogo(response.data);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };
    fetchLogo();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/signin");
  };


  return (
    <div className="fixed top-0 left-0 justify-between bg-black shadow-md z-50 ">
      <div className="pl-2 pr-[1vw] bg-white h-[4vw] w-screen flex justify-between">
        {/* Left Section */}
        <div className="flex pr-[2vw]"> 
          <Link className="flex text-center" to="/">
        {logo.length > 0 && (
          <img
            src={logo[0].addurl}
              className="h-[3.5vw] m-[.3vw] rounded-2xl p-1"
              alt="Logo"
            />)}
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex text-center">
          <i className="text-center text-[1.58vw] p-[.7vw] font-serif text-pink-700 font-semibold">
          A futuristic hub for innovation and growth !
          </i>
        </div>

        {/* Right Section */}
        <div className="flex flex-row pt-[.9vw] text-[.2vw]">
          <div className="flex gap-[1.6vw]">
       {/* Wishlist */}
        <Link to="/wishlistView" className="relative flex items-center">
          <FiHeart className="h-[1.4vw] w-[1.4vw] text-gray-600" />
          {wish > 0 && (
            <div className="absolute top-1 start-4 bg-red-500 text-white text-[0.8vw] font-bold 
              min-w-[1vw] h-[1vw] flex items-center justify-center rounded-full shadow-md">
              {wish}
            </div>
          )}
          <p className="ml-2 text-[1.1vw]">Wishlist</p>
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center">
          <MdOutlineShoppingCart className="h-[1.4vw] w-[1.4vw] text-gray-600" />
          {cart > 0 && (
            <div className="absolute top-1 start-4 bg-red-500 text-white text-[0.8vw] font-bold 
              min-w-[1vw] h-[1vw] flex items-center justify-center rounded-full shadow-md">
              {cart}
            </div>
          )}
          <p className="ml-2 text-[1.1vw]">Cart</p>
        </Link>
            {/* Login / Logout */}
            {token ? (
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
