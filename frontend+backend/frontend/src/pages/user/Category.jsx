import React from "react";
import { getAllCategory } from "../../services/categoryApi";
import { useEffect,useState } from "react";


function Category() {

    const [getCategories,setCategories] = React.useState([])

    useEffect(()=>{
     try{
          const getAllCategories = async () => {
            const data = await getAllCategory();
            setCategories(data);
            console.log(data);
          };
     }
       catch (err) {
        console.log("Error fetching posts:", err);
      }
      getAllCategories()
    },[])

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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-3">Technology</h3>

            <p className="text-slate-600 mb-6">
              Latest technology news and innovations.
            </p>

            <span className="text-blue-600 font-medium">Explore →</span>
          </div>

          <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-3">Frontend</h3>

            <p className="text-slate-600 mb-6">
              React, UI development and modern frontend tools.
            </p>

            <span className="text-blue-600 font-medium">Explore →</span>
          </div>

          <div className="border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
            <h3 className="text-2xl font-bold mb-3">Backend</h3>

            <p className="text-slate-600 mb-6">
              APIs, servers and backend architecture.
            </p>

            <span className="text-blue-600 font-medium">Explore →</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
