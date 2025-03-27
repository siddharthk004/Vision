import { useState } from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Fruits", image: "https://img.freepik.com/free-photo/male-doctor-holding-house-model-pointing-camera-protective-suit_176474-23733.jpg" },
  ]);

  const [editCategory, setEditCategory] = useState(null);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");

  // Add Category
  const addCategory = () => {
    const newCategory = {
      id: Date.now(), // Unique ID
      name: "New Category",
      image: "https://img.freepik.com/free-photo/male-doctor-holding-house-model-pointing-camera-protective-suit_176474-23733.jpg",
    };
    setCategories([...categories, newCategory]);
  };

  // Delete Category
  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  // Open Edit Form
  const openEditForm = (category) => {
    setEditCategory(category);
    setNewName(category.name);
    setNewImage(category.image);
  };

  // Update Category
  const updateCategory = () => {
    setCategories(categories.map(cat => 
      cat.id === editCategory.id ? { ...cat, name: newName, image: newImage } : cat
    ));
    setEditCategory(null); // Close edit form
  };

  return (
    <div className="bg-gray-100 p-[.5vw] w-full overflow-x-hidden">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="mt-[3vw] container mx-auto">
        <div className="flex items-center space-x-2 text-gray-700">
          <IoIosHome className="w-[1.3vw] h-[1.3vw]" />
          <h6>Category Manage</h6>
          <h6>/</h6>
          <h6 className="text-sm">Category</h6>
        </div>
      </div>

      {/* Category List */}
      <div className="mt-5 flex gap-3 p-5 w-full max-w-[80vw] mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 rounded-md">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
            <div className="w-[12vw] h-[12vw] rounded-full overflow-hidden border">
              <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
            </div>
            <h4 className="mt-2 text-lg font-bold">{category.name}</h4>

            {/* Buttons */}
            <div className="mt-3 flex gap-2">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => openEditForm(category)}
              >
                Edit
              </button>
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteCategory(category.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Category Button */}
      <div className="flex justify-center mt-5">
        <button 
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={addCategory}
        >
          Add New Category
        </button>
      </div>

      {/* Edit Form Modal */}
      {editCategory && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[30vw]">
            <h3 className="text-xl font-bold mb-3">Edit Category</h3>
            
            <label className="block">Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <label className="block">Image URL:</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setEditCategory(null)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={updateCategory}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
