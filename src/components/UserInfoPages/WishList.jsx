import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../Axios';
import Home from '../Home';
import ViewWishlist from './ViewWishlist';

function WishList() {
  const [data, setData] = useState([]); 
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate("/signin");
        return;
      }
      
      try {
        const response = await Axios().get('/wishlist/view', {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchData();
  }, [token, navigate]);

  // Handles delete request and removes from UI only if successful
  const handleDelete = async (id) => {
    try {
      const response = await Axios().delete(`/user/wishlist/delete/${id}`);

      if (response.status === 200) {

        setData((prev) => prev.filter((item) => item.id !== id));
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
    }
  };

  return (
    <div>
      <Home />
      <div className="h-full w-[100vw] flex flex-wrap justify-center gap-6 p-4 grid grid-cols-2">
        {data.length > 0 ? (
          data.map((item, index) => (
            <ViewWishlist data={item} key={item.id} ind={index+1} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center mt-10">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}

export default WishList;
