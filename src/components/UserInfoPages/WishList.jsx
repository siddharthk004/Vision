import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Axios from '../../Axios';
import Home from '../Home';
import ViewWishlist from './ViewWishlist';

function WishList() {
  const [data, setData] = useState([]); // State to store fetched data
  const navigate = useNavigate(); // Initialize useNavigate
  const email = localStorage.getItem("email"); // Retrieve email from localStorage
  const handleDelete = (id) => {
    setData((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };
  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Redirect to login if email is null
        if (!email) {
          navigate("/signin");
          return;
        }
        
        const response = await Axios().get('/user/ViewAllWishlist', {
          params: { email }, // Include email as a query parameter
        });
        setData(response.data); // Set the fetched data in state
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [email, navigate]); // Add dependencies to re-run only if email or navigate changes

  return (
    <div>
      <Home />
      <div className="h-full w-screen flex flex-wrap">
        {data.map((item, index) => (
          <ViewWishlist data={item} key={index} ind={index} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
