import React, { useEffect, useState } from "react";
import Axios from "../Axios";
import Card from "./Card";
import Exclusive from "./Category/Exclusive";
import Home from "./Home";
import "./index.css"; // Import CSS for hiding scrollbar

function Pesticide() {
  const [data, setData] = useState([]); // Store fetched data in state
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 25; // Number of items per page

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().post("/user/product"); // Replace with your actual API endpoint
        setData(response.data); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-zinc-100 overflow-hidden no-scrollbar h-screen overflow-y-scroll">
      <Home />
      <Exclusive  value={"Pesticide Products"} />

      <div className="flex p-8 flex-row flex-wrap justify-between bg-zinc-100 w-full">
        {/* Map through the current items and render a Card for each */}
        {currentItems.map((item, index) => (
          <Card data={item} key={index} index={index} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === i + 1 ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pesticide;
