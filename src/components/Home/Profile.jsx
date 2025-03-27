import React, { useEffect, useState } from "react";
import Home from "../Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Axios from "../../Axios";
// import { ClipLoader } from "react-spinners"; // Import spinner for better loading effect

function Profile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to homepage after logout
  };

  const handleEditProfile = () => navigate("/editprofile");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate("/signin");
        return;
      }

      try {
        const response = await Axios().post("/profile", {}, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setProfileData(response.data);
        } else {
          toast.error("Failed to fetch profile data.");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate]);


  return (
    <div className="w-full h-screen bg-gray-100">
      <Home />

      <div className="flex flex-col items-center mt-10">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
          {profileData?.image ? (
            <img src={profileData.image} className="w-full h-full object-cover" alt="Profile" />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600 text-xl">
              No Image
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="text-center mt-5 bg-white shadow-md p-6 rounded-lg w-11/12 max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-800">{profileData?.username} {profileData?.endname}</h2>

          <div className="mt-4 text-lg text-gray-700">
            <p><strong>Email:</strong> {profileData?.email}</p>
            <p><strong>Address:</strong> {profileData?.address}</p>
            <p><strong>Contact:</strong> {profileData?.contact}</p>
            <p><strong>Occupation:</strong> {profileData?.occupation}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={handleLogout}
              className="px-6 py-2 text-lg font-semibold text-red-600 border border-red-600 rounded-lg transition-all hover:bg-red-600 hover:text-white"
            >
              Log Out
            </button>
            <button
              onClick={handleEditProfile}
              className="px-6 py-2 text-lg font-semibold text-green-600 border border-green-600 rounded-lg transition-all hover:bg-green-600 hover:text-white"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
