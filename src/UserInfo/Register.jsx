import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import Axios from "../Axios"; // Assuming Axios is properly set up
import Home from "../components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the Toastify CSS!

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
      <Home />
      <div className="bg-green-300 w-full h-[82vh] pt-4 pl-[50vh] m-auto bg-gradient-to-l from-green-300 via-white to-orange-300">
        <div className="bg-blue-100 h-[97%] w-[70%] border-2 border-gray-300 rounded-3xl shadow-2xl shadow-zinc-600">
          <h1 className="text-4xl text-center font-bold mb-2 mt-2">Register</h1>

          <form onSubmit={handleSubmit}>
            <div className="flex ">
              <div className="pl-12 w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Username *</h1>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="length should 5+"
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Endname</h1>
                <input
                  type="text"
                  value={endname} placeholder="length should 5+"
                  onChange={(e) => setEndName(e.target.value)}
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="flex">
              <div className="pl-12 w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Email Id *</h1>
                <input
                  type="email"
                  value={email}
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Address</h1>
                <input
                  type="text"
                  value={address} placeholder="Enter Your Valid Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="flex">
              <div className="pl-12 w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Contact</h1>
                <input
                  type="text"
                  value={contact}
                  placeholder="+91 "
                  onChange={(e) => setContact(e.target.value)}
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Occupation</h1>
                <input
                  type="text"
                  value={occupation}
                  placeholder="eg: Student"
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex">
              <div className="pl-12 w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Password *</h1>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="length should 5+"
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-2xl font-semibold mt-10 ">Confirm Password *</h1>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="length should 5+"
                  className="w-2/3 px-5 py-2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>


            <h1 className="mt-3 text-center">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-5 w-8 mr-3"
              />
              Accept Terms And Conditions!
            </h1>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className=" hover:bg-green-700 hover:text-white bg-green-600 h-14 w-40 m-4 ml-[40%] rounded-3xl text-xl font-bold text-zinc-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"}{" "}
              {/* Show loading text */}
            </button>
          </form>

          <h1 className="text-center">
            or Sign In using
            <Link to="/signin" className="text-xl ml-6 underline">
              Sign-In
            </Link>
          </h1>
        </div>
         </div>
      {/* ToastContainer for showing toasts */}
      <ToastContainer />
    </div>
  );
};

export default Register;
