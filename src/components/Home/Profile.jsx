import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token'); // Retrieve token from local storage

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.address}</p>
          <p>{user.contactNumber}</p>
          <img src={user.profileImageUrl} alt="Profile" />
        </div>
      ) : (
        <p>Please log in to see your profile</p>
      )}
    </div>
  );
}


export default Profile
