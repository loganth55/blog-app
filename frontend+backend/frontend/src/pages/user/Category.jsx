import React from "react";
import { getAllCategory } from "../../services/categoryApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const [getCategories, setCategories] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const data = await getAllCategory();
        setCategories(data);
        console.log(data);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    getAllCategories();
  }, []);

  console.log(getCategories);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16">
          <p className="text-blue-400 font-medium mb-4">Explore Topics</p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Browse Categories
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl">
            Discover articles, tutorials, and insights across different
            technologies and topics.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getCategories.map((category) => (
          <div
            key={category._id}
            onClick={() => navigate(`/category/${category.name}`)}
            className="border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <img
              src={`http://localhost:8000${category.img}`}
              alt={category.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{category.name}</h3>

              <p className="text-slate-600 mb-6">{category.description}</p>

              <span className="text-blue-600 font-medium">Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
