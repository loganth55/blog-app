import React from "react";

import { useState, useEffect } from "react";
import { getAllCategory,createCategory, editCategory, deleteCategory } from "../services/categoryApi";

const AdminCategory = () => {
  const [categories, setCategory] = React.useState([]);
   const [isModalOpen, setIsModalOpen] = React.useState(false);
   const [categoryEdit, setCategoryEdit] = React.useState(null);
  const [name,setName] = React.useState("")
   const [description, setDescription] = React.useState("");
   const [img,setImg] =  React.useState(null)
   const[search,setSearch] = React.useState("")

   


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoriesData = await getAllCategory();
        setCategory(categoriesData);
        console.log(categoriesData);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    fetchCategory();
  }, []);


const handleCreateCategory = async () => {
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("img", img);

    const data = await createCategory(formData);

    console.log(data);
    setCategory((prev) => [...prev, data]);

    setIsModalOpen(false);
    
    setName("");
    setDescription("");
    setImg("");
  } catch (err) {
    console.log("Error creating category:", err);
  }
};
  
const handleUpdateCategory = async () => {
  try {
    const updateFormData = new FormData();

    updateFormData.append("name", name);
    updateFormData.append("description", description);
    updateFormData.append("img", img);

    const updatedData = await editCategory(categoryEdit._id, updateFormData);
setCategory(
  categories.map((item) => (item._id === updatedData._id ? updatedData : item)),
);
    setIsModalOpen(false);

    setName("");
    setDescription("");
    setImg(null);
  } catch (err) {
    console.log("Error updating category:", err);
  }
};

const handleDeleteCategory = async () => {
 try {
   const deletedCategory = await deleteCategory(categoryEdit._id);
    setCategory(categories.filter((item) => item._id !== deletedCategory._id));
    setIsModalOpen(false);
       setCategoryEdit(null);
    setName("");
    setDescription("");
    setImg(null);
 } catch (err) {
   console.log("Error fetching posts:", err);
 }
};

const filteredCategories = categories.filter((item) => {
  return (
    item && item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );
});

console.log(categories);

return (
  <div className="min-h-screen bg-slate-100 p-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-slate-500">Organize and manage your content</p>
        </div>

        <button
          onClick={() => {
            setCategoryEdit(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700"
        >
          + Add Category
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Categories..."
        className="w-full bg-white p-4 rounded-2xl shadow-sm mb-8 outline-none"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCategories.map((item) => (
          <div
            key={item._id}
            className="group bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 relative"
          >
            {/* Edit Icon */}
            <button
              onClick={() => {
                setCategoryEdit(item);

                setName(item.name);
                setDescription(item.description);

                setIsModalOpen(true);
              }}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all"
            >
              ✏️
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden">
                <img
                  src={`http://localhost:8000${item.img}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>

                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            </div>

            <div className="inline-block bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
              0 Articles
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {categoryEdit ? "Edit Category" : "Add Category"}
            </h2>

            <button onClick={() => setIsModalOpen(false)} className="text-xl">
              ✕
            </button>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Category Name</label>

            <input
              type="text"
              placeholder="Enter category name"
              className="w-full border border-slate-300 rounded-2xl p-3 outline-none"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              rows="4"
              placeholder="Enter description"
              className="w-full border border-slate-300 rounded-2xl p-3 outline-none resize-none"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Category Image</label>

            <input
              type="file"
              className="w-full border border-slate-300 rounded-2xl p-3"
              onChange={(e) => {
                setImg(e.target.files[0]);
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            {categoryEdit && (
              <button
                onClick={handleDeleteCategory}
                className="px-5 py-2 rounded-xl bg-red-600 text-white"
              >
                Delete
              </button>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2 rounded-xl bg-slate-200"
            >
              Cancel
            </button>

            {categoryEdit ? (
              <button
                onClick={handleUpdateCategory}
                className="px-5 py-2 rounded-xl bg-green-600 text-white"
              >
                Update
              </button>
            ) : (
              <button
                onClick={handleCreateCategory}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white"
              >
                Create
              </button>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);
  
};

export default AdminCategory;
