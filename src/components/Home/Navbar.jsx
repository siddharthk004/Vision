import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import Axios from "../../Axios";

function Navbar() {
  const navigate = useNavigate();
  const [wish, setWish] = useState(0);
  const [cart, setCart] = useState(0);
  const [logo, setLogo] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    Axios().get("/user/wishlistCount", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setWish(res.data))
      .catch((err) => console.error("Error fetching wishlist count:", err));
    Axios().get("/user/cartCount", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setCart(res.data))
      .catch((err) => console.error("Error fetching cart count:", err));
  }, [token]);

  useEffect(() => {
    Axios().get("/admin/add")
      .then((res) => setLogo(res.data))
      .catch((err) => console.error("Error fetching logo:", err));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResult([]);
      setShowPopup(false);
      return;
    }
    setLoading(true);
    setShowPopup(true);

    const delayDebounceFn = setTimeout(() => {
      Axios().get(`/user/search/${query}`)
        .then((res) => {
          setResult(res.data);
          if (res.data.length === 0) setShowPopup(false);
        })
        .catch((err) => console.error("Search Error:", err))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/signin");
  };

  return (
    <div className="fixed top-0 left-0 w-screen bg-black shadow-md z-50">
      <div className="pl-2 pr-[1vw] bg-white h-[4.4vw] w-screen flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {logo.length > 0 && (
            <img src={logo[0].addurl} className="h-[3.5vw] m-[.3vw] rounded-2xl p-1" alt="Logo" />
          )}
        </Link>

        {/* Search Bar */}
        <div className="relative flex items-center w-[30vw] max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 text-[1vw] border rounded-[.5vw] shadow-md focus:outline-none focus:ring focus:ring-blue-100 border-zinc-400"
            placeholder="Search..."
          />
          <button className="absolute right-2 bg-yellow-400 p-2 rounded-md" onClick={() => {}}>
            <IoMdSearch className="text-black text-xl" />
          </button>
        </div>
          {/* Icons - Wishlist, Cart, Profile/Login */}
          <div className="flex items-center gap-6">
            {/* Wishlist */}
            <Link to="/wishlistView" className="relative flex items-center">
              <FiHeart className="h-7 w-7 opacity-75 text-gray-700 hover:text-red-600 transition duration-200" />
              {wish > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {wish}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center">
              <MdOutlineShoppingCart className=" h-7 opacity-75 w-7 text-gray-700 hover:text-blue-600 transition duration-200" />
              {cart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {cart}
                </span>
              )}
            </Link>


          {/* Login / Profile */}
          {token ? (
            <Link to="/profileSection" className=" flex items-center">
              <CgProfile className="h-8 w-8 text-gray-600" />
            </Link>
          ) : (
            <Link to="/signin" className="flex items-center">
              <LuLogIn className="h-7 w-7 text-gray-600" />
            </Link>
          )}
        </div>
      </div>

      {/* Search Results Popup */}
      {showPopup && (
        <div className="absolute top-20 end-0 bg-white shadow-lg rounded-lg p-4 w-[60vw] z-50">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Search Results</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex gap-4 overflow-x-auto">
              {result.slice(0, 7).map((item, index) => (
                <Link to={`/user/product/id/${item.id}`} key={index} className="border p-3 rounded-lg shadow-md min-w-[200px]">
                  <img src={item.productimage} alt={item.productname} className="w-[10vw] h-[10vw] object-contain mx-auto" />
                  <h4 className="text-center text-lg font-semibold mt-2">{item.productname}</h4>
                  <p className="text-center text-gray-600">{item.productcompanyname}</p>
                  <p className="text-center text-green-700 font-bold">{item.afterdiscount} RS</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
