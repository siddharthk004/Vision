import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Axios from "../../Axios";
import { IoIosHome } from "react-icons/io";
import Navbar from "../Screen/Navbar";

function SupportRequest() {
  const [helpRequests, setHelpRequests] = useState([]);
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  const helpMessages = [
    "Hello! How can I assist you today?",
    "Thank you for reaching out. We will get back to you shortly!",
    "Your request is being processed. Please allow us some time.",
  ];

  useEffect(() => {
    const fetchHelpRequests = async () => {
      try {
        const response = await Axios().get("/admin/ViewHelpCenterList");
        setHelpRequests(response.data);
      } catch (error) {
        console.error("Error fetching help requests:", error);
      }
    };
    fetchHelpRequests();
  }, []);

  const copyToClipboard = () => {
    if (!selectedMessage) return;
    navigator.clipboard.writeText(selectedMessage);
    toast.success("Message copied!");
    setIsPopupOpen(false);
  };

  const handleSendMail = async (id, email) => {
    if (!messages[id]) {
      toast.warn("Please enter a message before sending.");
      return;
    }
    setLoading((prev) => ({ ...prev, [id]: true }));
    try {
      await Axios().post("/admin/serviceMailSend", {
        id,
        mail: email,
        message: messages[id],
      });
      toast.success("Mail sent successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to send mail!");
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mt-[3vw]">
        <div className="flex items-center space-x-2 text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]"/>
          <h6>Help Desk</h6>
          <h6>/</h6>
          <h6 className="text-sm">Support Request</h6>
        </div>
      </div>
      <ToastContainer />

      <div className="flex justify-between items-center p-4">
        <h6 className="text-lg font-semibold">Support Requests</h6>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsPopupOpen(true)}
        >
          Message Helper
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </button>
            <h4 className="text-lg font-bold">Select a Reply Message</h4>
            <select
              className="w-full p-2 border rounded mt-2"
              onChange={(e) => setSelectedMessage(e.target.value)}
            >
              <option value="">-- Select a Message --</option>
              {helpMessages.map((msg, index) => (
                <option key={index} value={msg}>
                  {msg}
                </option>
              ))}
            </select>
            <textarea
              className="w-full p-2 border rounded mt-2"
              value={selectedMessage}
              readOnly
            ></textarea>
            <button
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
              onClick={copyToClipboard}
              disabled={!selectedMessage}
            >
              Copy
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto mt-6">
        {helpRequests.length > 0 ? (
          <div className="grid gap-4">
            {helpRequests.map((request) => (
              <div key={request.id} className="bg-white p-6 rounded shadow">
                <h6 className="text-gray-600">ID: {request.id}</h6>
                <h5 className="font-bold">Name: {request.username}</h5>
                <h6 className="text-gray-500">Email: {request.email}</h6>
                <h4 className="mt-2 font-semibold">Query</h4>
                <p className="border p-2 rounded bg-gray-100">
                  {request.description}
                </p>
                <h4 className="mt-2 font-semibold">Reply</h4>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  placeholder="Enter Message Here..."
                  value={messages[request.id] || ""}
                  onChange={(e) =>
                    setMessages((prev) => ({
                      ...prev,
                      [request.id]: e.target.value,
                    }))
                  }
                ></textarea>
                <button
                  className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
                  onClick={() => handleSendMail(request.id, request.email)}
                  disabled={loading[request.id]}
                >
                  {loading[request.id] ? "Sending..." : "Send"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No help requests found.</p>
        )}
      </div>
    </div>
  );
}

export default SupportRequest;
