import React, { useState, useEffect } from 'react';
import Axios from '../Axios';
import { useNavigate } from 'react-router-dom';

function userDetails() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      // Redirect to login page if no token is found
      navigate('/login');
      return;
    }

    // Fetch user data using the token
    const fetchUserData = async () => {
      try {
        const response = await Axios().get('/user/details', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setUser(response.data); // Store user details in state
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Could not fetch user data');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      {/* Display other user details here */}
    </div>
  );
}

export default userDetails;
