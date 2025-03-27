import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Axios from '../../Axios';
import Home from '../Home';
import ViewCart from './ViewCart';

function Cart() {
  const [data, setData] = useState([]); // State to store fetched data
  const navigate = useNavigate(); // Initialize useNavigate
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

  const handleDelete = (id) => {
    // Update the data state to exclude the deleted item
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Redirect to login if token is null
        if (!token) {
          navigate("/signin");
          return;
        }

        const response = await Axios().get('/viewAllCart', {
          headers: { Authorization: token ? `Bearer ${token}` : "" },
        });
        setData(response.data); // Set the fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token, navigate]); // Add dependencies to re-run if token or navigate changes

  return (
    <div>
      <Home />
      <div className="h-full w-screen flex flex-wrap grid grid-cols-2">
        {data.map((item, index) => (
          <ViewCart data={item.product} quantity={item.quantity} key={index} ind={index} onDelete={handleDelete} >{console.log(item)}</ViewCart>
        ))}
      </div>
    </div>
  );
}

export default Cart;
