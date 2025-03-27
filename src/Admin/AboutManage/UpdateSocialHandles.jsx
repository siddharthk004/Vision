import { useState } from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

const UpdateSocialHandles = () => {
  // Initial Social Media Handles
  const [socialHandles, setSocialHandles] = useState({
    youtube: "https://youtube.com/example",
    instagram: "https://instagram.com/example",
    twitter: "https://x.com/example",
    facebook: "https://facebook.com/example",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
  });

  const [newHandles, setNewHandles] = useState({ ...socialHandles });
  const [isEditing, setIsEditing] = useState(false);

  // Handle Save
  const handleSave = () => {
    setSocialHandles(newHandles);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>Social Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">Update</h6>
        </div>
      </div>

      <div className="w-[40vw] bg-white h-[4vw] text-[2vw] font-bold text-green-800 text-center ml-[20vw]">
        Update Social Media Handles
      </div>

      <div className="max-w-[60vw] bg-white p-5 shadow-md rounded-md mx-auto mt-5">
        {isEditing ? (
          <>
            {Object.keys(newHandles).map((platform) => (
              <div key={platform} className="mb-3">
                <label className="block font-semibold capitalize">{platform}:</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value={newHandles[platform]}
                  onChange={(e) =>
                    setNewHandles({ ...newHandles, [platform]: e.target.value })
                  }
                />
              </div>
            ))}

            {/* Action Buttons */}
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
            {/* Display Social Links */}
            {Object.entries(socialHandles).map(([platform, link]) => (
              <p key={platform} className="text-gray-700 text-lg">
                <strong className="capitalize">{platform}:</strong>{" "}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {link}
                </a>
              </p>
            ))}

            {/* Edit Button */}
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

export default UpdateSocialHandles;
