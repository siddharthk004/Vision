import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../Axios";
import Cardpest from "../Card";

function Navbar() {
  const [name,setname] = useState('');
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [noresult, setnoresult] = useState(false);
  const [loading, setleading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setresult([]);
      setnoresult(false);
      return;
    }
    setleading(true);
    setnoresult(false);

    try {
      const response = await Axios().get(`/search/${query}`, {
        params: { q: query },
      });
      setresult(response.data);

      if (response.data.length === 0) {
        setnoresult(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setleading(false);
    }
  };

  // Use useEffect to call search function dynamically whenever `query` changes
  useEffect(() => {
    console.log(name);
    if (query) {
      handleSearch();
    } else {
      setresult([]);
      setnoresult(false); // Reset state when query is empty
    }
  }, [query]); // Effect depends on `query`

  // Handle input change (e.g., typing in the search box)
  const handleInputChange = (e) => {
    setquery(e.target.value);  // Update the query state dynamically as user types
  };

  return (
    <div className="">
      <div className="pt-[4%]  w-screen h-27  flex flex-wrap overflow-auto justify-between">
        <div className="flex pl-[1.5vw] gap-[1.4vw] pt-[1vw]">
          <Link to="/" className="">
            <p className="text-[1.2vw] font-lightbold text-zinc-800">Home</p>
          </Link>
          <Link to="/profileSection" className="">
            <p className="text-[1.2vw] font-lightbold text-zinc-800">Profile</p>
          </Link>
          <Link to="/pesticide" className="">
            <p className="text-[1.2vw] font-lightbold text-zinc-800">Products</p>
          </Link>
          <Link to="/help" className="">
            <p className="text-[1.2vw] font-lightbold text-zinc-800">Help</p>
          </Link>
          <Link to="/help" className="">
            <p className="text-[1.2vw] font-lightbold text-zinc-800">About</p>
          </Link>
        </div>
        
        <div className="m-[.7vw] w-[30vw] max-w-md h-[2.5vw] flex gap-5">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            
            className="w-full px-[3vw] py-[1vw] text-[1vw] border rounded-[.5vw] shadow-md focus:outline-none focus:ring focus:ring-blue-100 border-zinc-400 "
            placeholder="Search..."
          />
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {/* Conditionally render the results or set height to 0 */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          noresult ? "h-0" : "h-auto"
        }`}
        style={{ display: noresult ? "none" : "block" }}
      >
        {result.length > 0 && (
          <div className="flex flex-wrap justify-start p-6 gap-10 bg-white">
            {result.map((item, index) => (
              <Cardpest data={item} key={index} index={index} />
            ))}
          </div>
        )}
        {noresult && !loading && <p>No results found</p>}
      </div>
    </div>
  );
}

export default Navbar;
