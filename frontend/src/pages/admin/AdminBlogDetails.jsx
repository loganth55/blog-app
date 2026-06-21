import React from "react";
import { useState, useEffect } from "react";
import { getsinglepost } from "../../services/blogApi";
import { useParams } from "react-router-dom";

function AdminBlogDetails() {
  const [blog, setBlog] = React.useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const data = await getsinglepost(id);
        setBlog(data);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    getSinglePost();
  }, []);
  console.log(blog);

  if (blog === null) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="bg-white min-h-screen w-full">
      {/* HERO */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-20 left-10 md:left-24 max-w-5xl text-white">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm uppercase tracking-widest">
            {blog.category}
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            {blog.title}
          </h1>

          <div className="mt-8 flex gap-6 text-lg">
            <span>✍️ {blog.author}</span>
            <span>📅 {new Date(blog.createdAt).toDateString()}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          {/* LEFT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-2">
            <div className="sticky top-10">
              <p className="uppercase text-gray-400 text-sm mb-2">Author</p>

              <h3 className="font-bold text-lg mb-8">{blog.author}</h3>

              <p className="uppercase text-gray-400 text-sm mb-2">Category</p>

              <h3 className="font-bold text-lg mb-8">{blog.category}</h3>

              <p className="uppercase text-gray-400 text-sm mb-2">Status</p>

              <h3 className="font-bold text-lg">{blog.status}</h3>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="col-span-12 lg:col-span-7">
            <p className="text-3xl leading-relaxed font-light mb-12">
              {blog.description}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-10 text-lg whitespace-pre-line">
                {blog.content}
              </p>
            </div>

            <div className="my-16">
              <img
                src={blog.img}
                alt={blog.title}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-10 space-y-8">
              <div className="bg-black text-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-4">Newsletter</h2>

                <p className="text-gray-400 mb-6">
                  Get updates directly in your inbox.
                </p>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-4 rounded-xl text-black"
                />

                <button className="w-full mt-4 py-4 bg-white text-black rounded-xl font-semibold">
                  Subscribe
                </button>
              </div>

              <div className="bg-gray-100 rounded-3xl p-6">
                <h2 className="text-2xl font-bold mb-4">Article Info</h2>

                <div className="space-y-3">
                  <p>
                    <strong>Author:</strong> {blog.author}
                  </p>
                  <p>
                    <strong>Category:</strong> {blog.category}
                  </p>
                  <p>
                    <strong>Status:</strong> {blog.status}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
export default AdminBlogDetails;
