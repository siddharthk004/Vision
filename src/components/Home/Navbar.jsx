import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../Axios";
import Cardpest from "../Card/Cardpest";

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
      alert("No Result found");
    } finally {
      setleading(false);
    }
  };

  // Use useEffect to call search function dynamically whenever `query` changes
  useEffect(() => {
    Axios().get('/user/profile').then(response => { setname(response.data); }).catch(error=>{console.error(error);});
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
    <div>
      <div className="mt-[6.9vh] h-27 bg-gradient-to-r from-green-600 via-green-400 to-green-600 flex justify-between">
        <div className="flex">
          <Link to="/" className="pl-9 pt-3">
            <img
              className="rounded-3xl  h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75hVknuBik4SsZV7a6ZZhQ_zcX130HSxKDQ&s"
            />
            <h1 className="text-2xl font-lightbold text-zinc-800">Home</h1>
          </Link>

          <div className="pl-9 pt-3">
            <img
              className="rounded-3xl h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DIpd1kz9a3U1oAhsaqV9SSWCEuBl67kTfw&s"
            />
            <h1 className="text-2xl font-lightbold text-zinc-800">{name}</h1>
          </div>

          <Link to="/" className="pl-9 pt-3">
            <img
              className="rounded-3xl  h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgnTC5Tit5-qdHx72nAs91EjkOeny4GmDnUtr_hb1uev4yQdrheJs9UHMYeoJFr8c8oM&usqp=CAU"
            />
            <h1 className="text-2xl font-lightbold text-zinc-800">Scan</h1>
          </Link>

          <Link to="/pesticide" className="pl-9 pt-3">
            <img
              className="rounded-3xl ml-5 h-12"
              src="data:image/png;base64,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"
            />
            <h1 className="text-2xl font-lightbold text-zinc-800">Pesticide</h1>
          </Link>

          <div className="pl-9 pt-3">
            <img
              className="rounded-3xl h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZI5oiEgRPoflsOtMwT-ofEsdPn6gUKk5dg&s"
            />
            <h1 className="text-2xl font-lightbold text-zinc-800">Help</h1>
          </div>
        </div>
        <div className="mr-10 w-[160vh] max-w-md h-12 mt-7 flex gap-5">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            
            className="w-full px-5 py-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-400"
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
