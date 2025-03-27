import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "../../Axios";
import Home from "../Home";

const EditProfile = () => {
  const [endname, setEndName] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const email = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const userData = { email, endname, address, contact, occupation };

    formData.append("data", new Blob([JSON.stringify(userData)], { type: "application/json" }));
    if (image) formData.append("image", image);

    setIsSubmitting(true);
    
    try {
      const response = await Axios().post("/user/editprofile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      if (response.status === 200) {
        toast.success("Profile Updated Successfully!", { autoClose: 2000 });
        navigate("/profileSection");
      } else {
        toast.error("Profile update failed. Please try again.", { autoClose: 2000 });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong. Please try again.", { autoClose: 2000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      <Home />
      <div className="bg-white shadow-md rounded-lg p-8 mt-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-lg font-medium text-gray-700">Endname</label>
            <input
              type="text"
              value={endname}
              onChange={(e) => setEndName(e.target.value)}
              placeholder="Enter endname"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700">Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter contact number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700">Occupation</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="Enter occupation"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;