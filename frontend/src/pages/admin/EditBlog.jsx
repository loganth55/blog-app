import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getsinglepost, updatepost } from "../../services/blogApi";
import { useNavigate } from "react-router-dom";
const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [editPost, setEditPost] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log("id before api call:", id);
    const getSinglePost = async (id) => {
      try {
        const data = await getsinglepost(id);
        setEditPost(data);
        setTitle(data.title);
        setAuthor(data.author);
        setDescription(data.description);
        setContent(data.content);
        setCategory(data.category);
        setStatus(data.status);
        setEditPost(data.esitPost);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    getSinglePost(id);
  }, []);

  console.log(editPost);

  const navigate = useNavigate();
  const handleUpdate = async () => {
    try {
      const updatedData = {
        title,
        author,
        description,
        content,
        category,
        status,
      };
      console.log(updatedData);
      const datas = await updatepost(id, updatedData);
      console.log(datas);
      navigate("/posts");
    } catch (err) {
      console.log("Error fetching posts:", err);
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Edit Blog Post</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="mb-5">
            <label className="block font-medium mb-2">Post Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full border rounded-lg p-3"
              placeholder="Enter blog title"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Author name"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium mb-2">Short Description</label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter description"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Content</label>
            <textarea
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Write your blog content..."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Publish Settings</h2>

            <div className="mb-4">
              <label className="block mb-2">Category</label>

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
            </div>

            <div className="mb-6">
              <label className="block mb-2">Status</label>

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
            </div>

            <button
              onClick={() => handleUpdate()}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Update Post
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Featured Image</h2>

            <input type="file" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
