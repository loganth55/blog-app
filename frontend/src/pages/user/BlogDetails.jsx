import React from "react";
import { useState,useEffect } from "react";
import { getsinglepost } from "../../services/blogApi";
import { useParams } from "react-router-dom";


function BlogDetails() {

const [blog, setBlog] = React.useState(null);

const {id} = useParams()
console.log(id)
useEffect(()=>{
    const getSinglePost = async()=>{
        try {
          const data = await getsinglepost(id);
          setBlog(data);
          console.log(data)
        } catch (err) {
          console.log("Error fetching posts:", err);
        }
    }
    getSinglePost();
},[id])

  if (blog === null) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
          {blog?.category}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          {blog?.title}
        </h1>

        <div className="flex items-center gap-4 text-slate-500 mb-6">
          <span className="font-medium">{blog.author}</span>
          <span>•</span>
          <span>{new Date(blog.createdAt).toDateString()}</span>
        </div>
<p className="text-slate-600 mb-5 line-clamp-3">
  {blog?.description}
</p>
      </section>

      {/* Cover Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[250px] md:h-[500px] rounded-3xl bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg">Cover Image</span>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">{blog.content}</div>
      </section>

      {/* Discussion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="border-t pt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Discussion</h2>

          <p className="text-slate-500 mb-8">
            Join the discussion about this article.
          </p>

          {/* Comment Box */}
          <div className="bg-slate-50 border rounded-3xl p-6 mb-10">
            <textarea
              rows="4"
              placeholder="Write your comment..."
              className="w-full border rounded-2xl p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end mt-4">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium">
                Post Comment
              </button>
            </div>
          </div>

          {/* Comments */}

          <div className="space-y-6">
            <div className="border rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>

                <div>
                  <h4 className="font-semibold">Pranav</h4>

                  <p className="text-sm text-slate-500">2 hours ago</p>
                </div>
              </div>

              <p className="text-slate-700">Nice article 👍</p>
            </div>

            <div className="border rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>

                <div>
                  <h4 className="font-semibold">John</h4>

                  <p className="text-sm text-slate-500">1 day ago</p>
                </div>
              </div>

              <p className="text-slate-700">Very useful explanation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-3xl font-bold mb-10">Related Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-3xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-52 bg-gray-200"></div>

              <div className="p-5">
                <p className="text-blue-600 text-sm font-medium mb-2">
                  Technology
                </p>

                <h3 className="text-xl font-bold mb-3">Related Blog Title</h3>

                <p className="text-slate-600">
                  Short description of the article.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;
