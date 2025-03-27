import { useState } from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

const UpdateContact = () => {
  // Initial Contact Details
  const [contact, setContact] = useState({
    Email: "AgrivisionSupport@gmail.com",
    Contact: "+91 8766856421",
    Whatsapp: "+91 9552450050",
  });

  const [newContact, setNewContact] = useState({ ...contact });
  const [isEditing, setIsEditing] = useState(false);

  // Handle Save
  const handleSave = () => {
    setContact(newContact);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>Contact Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">Update</h6>
        </div>
      </div>

      <div className="w-[40vw] bg-white h-[4vw] text-[2vw] font-bold text-green-800 text-center ml-[20vw]">
        Update Contact Details
      </div>

      <div className="max-w-[60vw] bg-white p-5 shadow-md rounded-md mx-auto mt-5">
        {isEditing ? (
          <>
            {/* Email Input */}
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg mb-3"
              value={newContact.Email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            />

            {/* Contact Input */}
            <label className="block font-semibold">Contact Number:</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg mb-3"
              value={newContact.Contact}
              onChange={(e) => setNewContact({ ...newContact, whatsapp: e.target.value })}
            />
            {/* WhatsApp Input */}
            <label className="block font-semibold">WhatsApp Number:</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg mb-3"
              value={newContact.Whatsapp}
              onChange={(e) => setNewContact({ ...newContact, whatsapp: e.target.value })}
            />

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
            {/* Display Contact Info */}
            <p className="text-gray-700 text-lg">
              <strong>Email:</strong> {contact.Email}
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Contact:</strong> {contact.Contact}
            </p>
            <p className="text-gray-700 text-lg">
              <strong>WhatsApp:</strong> {contact.Whatsapp}
            </p>

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

export default UpdateContact;
