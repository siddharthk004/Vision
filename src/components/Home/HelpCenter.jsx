import React, { useEffect, useState } from "react";
import Home from "../Home";
import { toast } from "react-toastify";
import Axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function HelpCenter() {
  const [description, setDescription] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim() || description.length < 5) {
      toast.error("Description must be at least 5 characters long.", {
        autoClose: 2000,
      });
      return;
    }

    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    try {
      const response = await Axios().post("/user/service/save", {
        token,
        description,
      });

      if (response.status === 200) {
        toast.success("Your request has been submitted successfully!", {
          autoClose: 2000,
        });
        setResponseMessage(response.data);
        setDescription("");
      } else {
        toast.error("Failed to submit. Please try again.", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error sending request:", error);
      toast.error("Something went wrong. Please try again later.", {
        autoClose: 2000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Home />
      <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl border border-gray-300">
        <h1 className="text-4xl font-bold text-center text-green-700">
          Help Center
        </h1>
        <p className="text-center text-gray-600 text-lg mt-2">
          Submit your issue, and our team will assist you shortly.
        </p>

        {/* Help Request Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="issueDescription" className="text-xl font-semibold">
              Describe Your Issue:
            </label>
            <textarea
              id="issueDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter details about your issue..."
              className="border-2 border-gray-400 w-full h-40 rounded-lg text-lg p-4 resize-none focus:ring-2 focus:ring-green-200"
              aria-label="Issue Description"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-40 py-3 rounded-lg text-white text-xl font-semibold transition-all ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <div className="bg-gray-200 border border-gray-400 p-4 mt-6 rounded-lg text-center text-lg font-medium text-gray-900">
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default HelpCenter;
