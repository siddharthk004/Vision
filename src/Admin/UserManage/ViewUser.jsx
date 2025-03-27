import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import Navbar from "../Screen/Navbar";

const ViewUser = () => {
  const [users, setUsers] = useState([
    { id: 3, name: "Alice Johnson", email: "alice@example.com", contact: "9876543210", address: "New York, USA", status: "Available" },
    { id: 1, name: "John Doe", email: "john@example.com", contact: "1234567890", address: "Los Angeles, USA", status: "Available" },
    { id: 2, name: "Emily Davis", email: "emily@example.com", contact: "7654321098", address: "Chicago, USA", status: "Available" },
  ]);

  // Sorting users by ID
  const sortedUsers = [...users].sort((a, b) => a.id - b.id);

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>User Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">View</h6>
        </div>
      </div>
      <div className="w-[40vw] bg-white h-[4vw] text-[2vw] font-bold text-green-800 text-center ml-[20vw]">
      View User
      </div>

      <div className="overflow-x-auto p-[2vw]">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.contact}</td>
                <td className="p-3">{user.address}</td>
                <td className="p-3 font-bold text-green-600">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
