import React from "react";
import categories from "../data/categories";
import { useState, useEffect } from "react";
import { getAllCategory } from "../services/categoryApi";

const AdminCategory = () => {
  const [category, setCategory] = React.useState([]);

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

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Categories</h1>
            <p className="text-slate-500">Organize and manage your content</p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700">
            + Add Category
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Categories..."
          className="w-full bg-white p-4 rounded-2xl shadow-sm mb-8 outline-none"
        />

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Card */}
          <div className="group bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 relative">
            {/* Edit Icon */}
            <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
              ✏️
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold">Travel</h2>

                <p className="text-sm text-slate-500">Explore travel content</p>
              </div>
            </div>

            <div className="inline-block bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
              24 Articles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
