import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import Axios from "../Axios"; // Assuming Axios is properly set up
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the Toastify CSS!
import MainNavbar from "../components/Home/MainNavbar";

const Register = () => {
  const [username, setUserName] = useState("");
  const [endname, setEndName] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const navigate = useNavigate(); // Using navigate from useNavigate
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 4) {
      toast.error("Username Length should grater than 5!", { autoClose: 2000 });
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", { autoClose: 2000 });
      return;
    }
    if (password.length < 4 || password.length > 8) {
      toast.error("Passwords length should 4-8 ", { autoClose: 2000 });
      return;
    }
    // Validate the password match and terms acceptance
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { autoClose: 2000 });

      return;
    }
    if (!acceptTerms) {
      toast.error("You must accept the terms and conditions.", {
        autoClose: 2000,
      });
      return;
    }

    // Prevent submitting again if already submitting
    if (isSubmitting) return;

    // Set submitting state to true
    setIsSubmitting(true);

    // Handle registration logic here (e.g., send user data to the backend)
    try {
      const response = await Axios().post("/user/register", {
        username,
        email,
        endname,
        address,
        contact,
        occupation,
        password,
      });

      // Check if registration was successful
      if (response.status === 200) {
        toast.success("Registration Successfull.", { autoClose: 2000 });
        navigate("/signin");
      } else {
        toast.error("Registration failed. Please try again.", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      // Handle any errors that occur during the registration process
      console.error("Error during registration:", error);
      toast.error("omething went wrong. Please try again.", {
        autoClose: 2000,
      });
    } finally {
      // Reset submitting state after the request is done
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <MainNavbar />
      <div className="pt-[7vw] pl-[20vw] ">
        <div className="bg-zinc-100 w-[60vw] border-[.1vw] border-zinc-300 rounded-[1vw]">
          <h1 className="text-[1.7vw] text-center mr-[5vw] font-bold mt-[.5vw]">Register</h1>

          <form onSubmit={handleSubmit}>
            <div className="flex mt-[1vw]">
              <div className="pl-[2vw] w-[40vw]">
                <h1 className=" flex text-[1.5vw] font-semibold ">Username <p className="text-red-700">*</p></h1>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="length should 5+"
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className=" w-[40vw]">
                <h1 className="text-[1.5vw] font-semibold ">Endname </h1>
                <input
                  type="text"
                  value={endname}
                  onChange={(e) => setEndName(e.target.value)}
                  placeholder="length should 5+"
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex mt-[1vw]">
              <div className="pl-[2vw] w-[40vw]">
                <h1 className=" flex text-[1.5vw] font-semibold ">Email Id <p className="text-red-700">*</p></h1>
                <input
                  type="email"
                  value={email}
                  placeholder="agrivision@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className=" w-[40vw]">
                <h1 className="text-[1.5vw] font-semibold ">Address </h1>
                <input
                  type="text"
                  value={address} placeholder="Enter Your Valid Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex mt-[1vw]">
              <div className="pl-[2vw] w-[40vw]">
                <h1 className=" flex text-[1.5vw] font-semibold ">Contact</h1>
                <input
                  type="text"
                  value={contact}
                  placeholder="+91 "
                  onChange={(e) => setContact(e.target.value)}
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className=" w-[40vw]">
                <h1 className="text-[1.5vw] font-semibold ">Occupation </h1>
                <input
                  type="text"
                  value={occupation}
                  placeholder="eg: Student"
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex mt-[1vw]">
              <div className="pl-[2vw] w-[40vw]">
                <h1 className=" flex text-[1.5vw] font-semibold ">Password<p className="text-red-700">*</p></h1>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="length should 5+"
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className=" w-[40vw]">
                <h1 className="text-[1.5vw] flex font-semibold ">Confirm Password<p className="text-red-700">*</p> </h1>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="length should 5+"
                  className="w-[20vw] px-[1vw] py-[.7vw] mt-[.5vw] border-[.1vw] border-gray-300 rounded-[.5vw] focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>

            <h1 className="mt-[.4vw] text-center">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-[1vw] w-[1vw] mr-[.6vw]"
              />
              Accept Terms And Conditions!
            </h1>
            <div className="flex">
            <Link
              to="/signin" 
              className="p-[.5vw] pl-[3vw] hover:bg-green-600 hover:text-white text-zinc-700 underline h-[3vw] w-[10vw] m-[1vw] ml-[15vw] rounded-[1vw] text-[1.3vw] font-bold text-white"
            >
              Sign-In
            </Link>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className=" hover:bg-green-700 hover:bg-green-700 bg-green-600 h-[3vw] w-[10vw] m-[1vw] ml-[2vw] rounded-[1vw] text-[1.3vw]  font-bold text-white"
            >
              {isSubmitting ? "Submitting..." : "Submit"}{" "}
              {/* Show loading text */}
            </button>
            </div>
          </form>
        </div>
         </div>
      {/* ToastContainer for showing toasts */}
      <ToastContainer />
    </div>
  );
};

export default Register;
