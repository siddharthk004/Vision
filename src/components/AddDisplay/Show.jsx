import React, { useEffect, useState } from "react";
import Axios from "../../Axios";
import Card from "../Card";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

function Show() {
  const [data, setData] = useState([]); // Store fetched data in state
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().post("/user/product"); // Replace with your actual API endpoint
        setData(response.data); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="p-[2vw] bg-zinc-100 w-full">
      {loading ? (
        // Show loading spinner while fetching data
        <div className="flex justify-center items-center h-[20vh]">
          <FaSpinner className="text-4xl text-gray-500 animate-spin" />
        </div>
      ) : (
        // Show product grid when data is available
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {data.slice(4, 16).map((item, index) => (
            <Card data={item} key={index} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Show;
