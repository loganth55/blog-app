import React from "react";
import { createposts } from "../../services/blogApi";

function CreateBlog() {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [status, setStatus] = React.useState("");

  const publishPostBtn = async () => {
    const data = {
      title: title,
      author: author,
      description: description,
      content: content,
      category: category,
      status: status,
    };
    try {
      console.log(data);
      const datas = await createposts(data);
      console.log(datas);
    } catch (err) {
      console.log("Error fetching posts:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Side */}
        <div className="col-span-3 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold border-b pb-2">Setup & Login Status</h2>

            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold">Admin Login</h3>

              <p className="text-gray-500 mt-2">First-admin setup is locked.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold border-b pb-2">
              Quick Performance Snapshot
            </h2>

            <div className="h-40 flex items-center justify-center">
              Performance Chart
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold border-b pb-2">
              Search Engine Optimization
            </h2>

            <input
              type="text"
              placeholder="Meta Title"
              className="w-full border p-2 rounded mt-4"
            />

            <input
              type="text"
              placeholder="Canonical URL"
              className="w-full border p-2 rounded mt-4"
            />

            <textarea
              placeholder="Meta Description"
              className="w-full border p-2 rounded mt-4 h-24"
            />
          </div>
        </div>

        {/* Center */}
        <div className="col-span-6 bg-white p-6 rounded-xl shadow">
          <h1 className="text-4xl font-bold mb-6">Add New Blog Post</h1>

          <input
            type="text"
            placeholder="Post Title"
            className="w-full border p-3 rounded mb-4"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />

          <input
            type="text"
            placeholder="Author"
            className="w-full border p-3 rounded mb-4"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            value={author}
          />

          <textarea
            placeholder="Short Description"
            className="w-full border p-3 rounded mb-4 h-28"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />

          <textarea
            placeholder="Write your content here..."
            className="w-full border p-3 rounded h-72"
            onChange={(event) => {
              setContent(event.target.value);
            }}
            value={content}
          />
        </div>

        {/* Right Side */}
        <div className="col-span-3 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold border-b pb-2">Publish Settings</h2>

            <select
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              value={category}
              className="w-full border p-3 rounded"
            >
              <option>Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="AI">AI</option>
            </select>

            <select
              onChange={(event) => {
                setStatus(event.target.value);
              }}
              value={status}
              className="w-full border p-2 rounded mt-4"
            >
              <option>Select Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>

            <div className="mt-4">
              <input type="checkbox" /> Mark as Featured
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded mt-4"
              onClick={publishPostBtn}
            >
              Publish Post
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold border-b pb-2">Featured Image</h2>

            <div className="border-2 border-dashed h-48 rounded mt-4 flex items-center justify-center">
              Upload Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateBlog;
