import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import Axios from "../Axios"; // Assuming Axios is properly set up
import Home from "../components/Home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Don't forget to import the Toastify CSS!

const Register = () => {
  const [username, setUserName] = useState("");
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
      toast.error('Username Length should grater than 5!',{autoClose:2000,});
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', { autoClose: 2000 });
      return;
    }
    if (password.length < 4 || password.length > 8) {
      toast.error('Passwords length should 4-8 ',{autoClose:2000,});
      return;
    }
    // Validate the password match and terms acceptance
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!',{autoClose:2000,});
      
      return;
    }
    if (!acceptTerms) {
      toast.error('You must accept the terms and conditions.',{autoClose:2000,});
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
        password,
      });

      // Check if registration was successful
      if (response.status === 200) {
      toast.success('Registration Successfull.',{autoClose:2000,});
        navigate("/signin");
      } else {
      toast.error('Registration failed. Please try again.',{autoClose:2000,});
      }
    } catch (error) {
      // Handle any errors that occur during the registration process
      console.error("Error during registration:", error);
      toast.error('omething went wrong. Please try again.',{autoClose:2000,});
    } finally {
      // Reset submitting state after the request is done
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Home />
      <div className="bg-green-300 w-full h-[83.5vh] pt-40 pl-[62vh] m-auto bg-gradient-to-l from-green-300 via-white to-orange-300">
        <div className="bg-blue-100 h-[57vh] w-[80vh] border-2 border-gray-300 rounded-3xl shadow-2xl shadow-zinc-600">
          <h1 className="text-4xl font-bold ml-[31vh] mb-3 mt-5">Register</h1>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <h1 className="text-2xl font-semibold mt-10 ml-10">Username</h1>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-[30vh] ml-10 px-5 py-2 mt-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold mt-10 ml-10">Email</h1>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[30vh] ml-10 px-5 py-2 mt-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <h1 className="text-2xl font-semibold mt-10 ml-10">Password</h1>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[30vh] ml-10 px-5 py-2 mt-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold mt-10 ml-10">Confirm Password</h1>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-[30vh] ml-10 px-5 py-2 mt-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            </div>

            <h1 className="ml-[26vh] mt-5">
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
              className="hover:bg-green-700 hover:text-white bg-green-600 h-14 w-40 m-7 ml-[28vh] rounded-3xl text-xl font-bold text-zinc-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"} {/* Show loading text */}
            </button>
          </form>

          <h1 className="ml-[26vh] mt-3">
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
