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

  const email = localStorage.getItem('email');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const userData = {
      email,
      endname: endname || null,
      address: address || null,
      contact: contact || null,
      occupation: occupation || null,
    };

    // Append JSON data as a Blob
    formData.append(
      "data",
      new Blob([JSON.stringify(userData)], { type: "application/json" })
    );

    // Append the image file if it exists
    if (image) {
      formData.append("image", image);
    }

    setIsSubmitting(true);

    try {
      const response = await Axios().post("/user/editprofile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Profile Edited Successfully!", { autoClose: 2000 });
        navigate("/profileSection");
      } else {
        toast.error("Profile edit failed. Please try again.", { autoClose: 2000 });
      }
    } catch (error) {
      console.error("Error during Edit:", error);
      toast.error("Something went wrong. Please try again.", { autoClose: 2000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Home />
      <div className="bg-green-300 w-full h-[95vh] pt-4 pl-[50vh] m-auto bg-gradient-to-l from-green-300 via-white to-orange-300">
        <div className="bg-blue-100 h-[62%] mt-[6%] w-[70%] border-2 border-gray-300 rounded-3xl shadow-2xl shadow-zinc-600">
          <h1 className="text-4xl text-center font-bold mb-2 mt-2">
            Edit Profile
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="pl-12 w-[75%] mt-5 flex gap-20">
              <h1 className="text-2xl mt-6 font-semibold">Endname</h1>
              <input
                type="text"
                value={endname}
                onChange={(e) => setEndName(e.target.value)}
                placeholder="length should 5+"
                className="w-2/3 px-6 py-4 ml-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="pl-12 w-[75%] mt-5 flex gap-20">
              <h1 className="text-2xl mt-6 font-semibold">Address </h1>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="length should 5+"
                className="w-2/3 px-6 py-4 mt-3 ml-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="pl-12 w-[75%] mt-5 flex gap-20">
              <h1 className="text-2xl mt-6 font-semibold">Contact </h1>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+91"
                className="w-2/3 px-6 py-4 mt-3 ml-[25px] border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="pl-12 w-[75%] mt-5 flex gap-16">
              <h1 className="text-2xl mt-6 font-semibold">Occupation </h1>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="eg: Student"
                className="w-2/3 px-6 py-4 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="pl-12 w-[75%] mt-5 flex gap-16">
              <h1 className="text-2xl mt-6 font-semibold">Image </h1>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-6 ml-14"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className=" hover:bg-green-700 hover:text-white bg-green-600 h-14 w-40 m-2 ml-[40%] rounded-3xl text-xl font-bold text-zinc-700"
            >
              {isSubmitting ? "Saving..." : "Save"}{" "}
              {/* Show loading text */}
            </button>
          </form>
        </div>
      </div>
      {/* ToastContainer for showing toasts */}
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
