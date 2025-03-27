import { default as React, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

function HomeAdmin() {
  const [tasks, setTasks] = useState([
    { text: "Review User Activity", completed: false },
    { text: "Manage User Permissions", completed: false },
    { text: "Monitor System Logs", completed: false },
    { text: "Update Dashboard Analytics", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      toast.success("Task added successfully", { theme: "dark" });
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    toast.warn("Task deleted", { theme: "dark" });
  };

  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mt-[3vw]">
        <div className="flex items-center space-x-2 text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]"/>
          <h6>Dashboard</h6>
          <h6>/</h6>
          <h6 className="text-sm">Home</h6>
        </div>
      </div>
      <ToastContainer />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-[1vw] lg:grid-cols-4 gap-4 mt-4">
        {[
          {
            title1: "Weekly Sales",
            title3: "Since Last Month",
            title2: "50238",
            value: "8.24%",
            color: "linear-gradient(90deg, #d5e5f5, #93c8fa)",
            imageURL:
              "https://png.pngitem.com/pimgs/s/520-5201007_circle-hd-png-download.png",
          },
          {
            title1: "New Users",
            title3: "Since Last Month",
            title2: "2743",
            value: "2.57%",
            color: "linear-gradient(90deg, #f0d4ff,#da9dfa)",
            imageURL:
              "https://i.pinimg.com/736x/6b/4f/d2/6b4fd241ab4046ff41ca5ace665f44a7.jpg",
          },
          {
            title1: "Purchase Order",
            title3: "Since Last Month",
            title2: "2038",
            value: "5.14%",
            color: "linear-gradient(90deg, #e2faca, #c3f590)",
            imageURL:
              "https://i.pinimg.com/736x/fb/17/e7/fb17e706bf3eef73396e7db08585468f.jpg",
          },
          {
            title1: "Messages",
            title3: "Since Last Month",
            title2: "3438",
            value: "9.58%",
            color: "linear-gradient(90deg, #fad7dc, #fca9b6)",
            imageURL:
              "https://i.pinimg.com/736x/30/19/5b/30195bd92a700b31793c915f07e3c926.jpg",
          },
        ].map((item, index) => (
          <div className="col-md-3 " key={index}>
            <div
              style={{ background: item.color }}
              className="border-0 rounded-[1vw] text-dark p-3"
            >
              <div className="d-flex flex">
                <div className="w-20">
                  <p className="text-[1vw] w-[9vw] text-body-tertiary opacity-75">
                    {item.title1}
                  </p>
                  <h4 className="text-[1.2vw]">{item.title2}</h4>
                </div>
                <div className="w-50 ml-[10vw] h-[1vw] pt-[1vw]">
                  <img
                    src={item.imageURL}
                    className="rounded-[2vw] float-end"
                    style={{ width: "50px", height: "auto" }}
                  ></img>
                </div>
              </div>
              <br />
              <br />
              <div className="flex gap-[3vw] flex gap-4">
                <h6 className="text-green-800 text-[1vw]">{item.value}</h6>
                <h6>{item.title3}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* To-Do List */}
      <div className="bg-white p-[1vw] border border-zinc-300 p-4 mt-6 rounded shadow-md w-full md:w-1/2">
        <h4 className="text-center text-blue-600 mb-3">🎯 To-Do List</h4>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            className="border p-2 flex-grow rounded"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border rounded ${
                task.completed ? "bg-green-100 line-through" : "bg-gray-100"
              }`}
            >
              <span
                className="cursor-pointer"
                onClick={() => toggleTask(index)}
              >
                {task.text}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h6 className="text-center mt-6 text-gray-500">@2025 Pray Tech 🙏</h6>
    </div>
  );
}

export default HomeAdmin;
