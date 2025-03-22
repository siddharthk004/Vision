import React, { useEffect, useState } from "react";
import Home from "../Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Axios from "../../Axios";

function Profile() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email"); // Retrieve email from localStorage
  const [profileData, setProfileData] = useState(null); // State to store user profile data
  const [isLoading, setIsLoading] = useState(true); // Loading state for better UX

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token from localStorage
    localStorage.removeItem("email"); // Remove email from localStorage
    navigate("/"); // Redirect to page
  };

  const handleEditProfile = () => {
    navigate("/editprofile"); // Redirect to an edit profile page
  };

  // Use useEffect to fetch data when the component is rendered
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (email === null) {
          navigate("/signin");
          return;
        }

        const response = await Axios().post("/user/profile", { email }); // Make API call with email
        if (response.status === 200) {
          setProfileData(response.data); // Store fetched data in state
          console.log("Data fetch successful", response.data);
        } else {
          console.log("Data fetch failed");
          toast.error("Failed to fetch profile data.");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false); // Set loading state to false after fetch
      }
    };

    fetchProfile();
  }, [email, navigate]); // Dependency array includes email and navigate

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="loader"></div> {/* Replace with a proper spinner component */}
        <p className="ml-4 text-lg">Loading profile data...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[93.1vh]">
      <Home />
      <div className="mt-5 h-[30vh]">
      <div className="h-[95%] p-4 w-[30vh] ml-[40%]">
          {profileData.image && (
            <img
              src={profileData.image}
              className="h-full w-full rounded-full"
              alt="Profile"
            />
          )}
        </div>
      </div>
      <div>
        {profileData ? (
          <div className="rounded-lg">
            <h2 className="text-6xl mr-[6%] mt-4 font-semibold text-center">
              {profileData.username} {profileData.endname}
            </h2>
            <div className="h-60 w-[80vh]">
              <h1 className="text-4xl mt-4 ml-[20%]">
                <b>Email:</b> {profileData.email}
              </h1>
              <h1 className="text-4xl mt-4 ml-[20%]">
                <b>Address:</b> {profileData.address}
              </h1>
              <h1 className="text-4xl mt-4 ml-[20%]">
                <b>Contact:</b> {profileData.contact}
              </h1>
              <h1 className="text-4xl mt-4 ml-[20%]">
                <b>Occupation:</b> {profileData.occupation}
              </h1>
            </div>
            <div className="justify-center pr-28 gap-4 mt-10 w-full h-20 flex">
              <button
                onClick={handleLogout}
                className="border-xl border-red-700 border-2 rounded-xl h-[80%] w-[10%] text-red-700 font-semibold text-2xl"
              >
                Log Out
              </button>
              <button
                onClick={handleEditProfile}
                className="border-xl border-green-700 border-2 rounded-xl h-[80%] w-[10%] text-green-700 font-semibold text-2xl"
              >
                Edit
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-2xl">No profile data available</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
