import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import Navbar from "../Screen/Navbar";

const CommentView = () => {
  const [comments, setComments] = useState([
    {
      id: 3,
      productId: 101,
      userName: "Alice Johnson",
      media: "https://via.placeholder.com/150",
      rating: 4.5,
      comment: "Great product, highly recommend!",
    },
    {
      id: 1,
      productId: 102,
      userName: "John Doe",
      media: "https://via.placeholder.com/150",
      rating: 5,
      comment: "Amazing quality, fast shipping!",
    },
    {
      id: 2,
      productId: 103,
      userName: "Emily Davis",
      media: "https://via.placeholder.com/150",
      rating: 4,
      comment: "Good value for money.",
    },
  ]);

  // Sorting comments by ID
  const sortedComments = [...comments].sort((a, b) => a.id - b.id);

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>Comment Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">View</h6>
        </div>
      </div>

      <div className="w-[40vw] bg-white h-[4vw] text-[2vw] font-bold text-green-800 text-center ml-[20vw]">
        View Comments
      </div>

      <div className="overflow-x-auto p-[2vw]">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Product ID</th>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Media</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            {sortedComments.map((comment) => (
              <tr key={comment.id} className="border-b">
                <td className="p-3">{comment.id}</td>
                <td className="p-3">{comment.productId}</td>
                <td className="p-3">{comment.userName}</td>
                <td className="p-3">
                  <a href={comment.media} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    View
                  </a>
                </td>
                <td className="p-3">{comment.rating} ⭐</td>
                <td className="p-3">{comment.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentView;
