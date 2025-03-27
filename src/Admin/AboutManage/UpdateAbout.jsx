import { useState } from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

const UpdateAbout = () => {
  // Initial about text
  const [aboutText, setAboutText] = useState("AgriVision is a cutting-edge AgriTech platform dedicated to transforming the agricultural sector by empowering farmers with technology-driven solutions. Our mission is to enhance farm productivity, optimize resource utilization, and improve the overall livelihoods of farmers through innovation and data-driven insights . \n \
\    AgriVision integrates advanced technologies such as AI-powered crop disease detection, smart farming analytics, and an efficient marketplace for agricultural products. By bridging the gap between farmers and modern agricultural solutions, we aim to boost crop yields, reduce input costs, and ensure sustainable farming practices.\n \
\   With a deep understanding of the agricultural ecosystem, AgriVision is committed to revolutionizing farming by providing accessible, reliable, and technology-driven support—helping farmers across India achieve higher efficiency, profitability, and long-term success. 🚜🌱");
  
  
    const [newText, setNewText] = useState(aboutText);
  const [isEditing, setIsEditing] = useState(false);

  // Handle Save
  const handleSave = () => {
    setAboutText(newText);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>About Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">Update</h6>
        </div>
      </div>

      <div className="w-[40vw] bg-white h-[4vw] text-[2vw] font-bold text-green-800 text-center ml-[20vw]">
        Update About Text
      </div>

      <div className="max-w-[60vw] bg-white p-5 shadow-md rounded-md mx-auto mt-5">
        {isEditing ? (
          <>
            <textarea
              className="w-full p-3 border rounded-lg h-[10vw]"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-3">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-700 text-lg">{aboutText}</p>
            <div className="flex justify-end mt-3">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateAbout;
