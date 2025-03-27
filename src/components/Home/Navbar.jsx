import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../Axios";
function Navbar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResult([]);
      setShowPopup(false);
      return;
    }
    setLoading(true);
    setShowPopup(true);

    try {
      const response = await Axios().get(`/user/search/${query}`);
      setResult(response.data);

      if (response.data.length === 0) {
        setShowPopup(false);
      }
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Call API when user types
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 500); // Delay to avoid excessive API calls

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="relative">
      <div className="pt-[4%] w-screen h-27 flex flex-wrap overflow-auto justify-between">
        <div className="flex pl-[1.5vw] gap-[1.4vw] pt-[1vw]">
          <Link to="/" className="text-[1.2vw] font-lightbold text-zinc-800">Home</Link>
          <Link to="/profileSection" className="text-[1.2vw] font-lightbold text-zinc-800">Profile</Link>
          <Link to="/pesticide" className="text-[1.2vw] font-lightbold text-zinc-800">Products</Link>
          <Link to="/help" className="text-[1.2vw] font-lightbold text-zinc-800">Help</Link>
        </div>
        
        <div className="m-[.7vw] w-[30vw] max-w-md h-[2.5vw] flex gap-5">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-[3vw] py-[1vw] text-[1vw] border rounded-[.5vw] shadow-md focus:outline-none focus:ring focus:ring-blue-100 border-zinc-400"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Search Popup */}
      {showPopup && (
        <div className="absolute top-20 end-0 top-25 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-[60vw] z-50">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Search Results</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {result.slice(0, 7).map((item, index) => (
                <Link  to={`/user/product/id/${item.id}`}  key={index} className="border p-3 rounded-lg shadow-md min-w-[200px]">
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
