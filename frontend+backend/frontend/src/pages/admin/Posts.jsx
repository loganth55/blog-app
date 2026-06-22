import React from "react";
import { useEffect } from "react";
import { getposts } from "../../services/blogApi";
import DashboardCard from "../../components/admin/DashboardCard";
import { Link } from "react-router-dom";
import { deletepost } from "../../services/blogApi";

function Posts() {
  const [post, setPost] = React.useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getposts();
        setPost(data);
        
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await deletepost(id);
      setPost(post.filter((item) => item._id !== id));
    } catch (err) {
      console.log("Error fetching posts:", err);
    }
  };

  console.log(post);

  return (
    <div className="flex-1 p-8 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Posts</h1>

          <p className="text-gray-500 mt-2">Manage all your blog posts</p>
        </div>

        <Link to="/createpost">
          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
            + Create Post
          </button>
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <div className="bg-blue-50 p-5 rounded-xl">
          <h3 className="text-gray-600">Total Posts</h3>

          <p className="text-3xl font-bold mt-2">{post.length}</p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="text-gray-600">Published</h3>

          <p className="text-3xl font-bold mt-2">
            {post.filter((item) => item.status === "Published").length}
          </p>
        </div>

        <div className="bg-yellow-50 p-5 rounded-xl">
          <h3 className="text-gray-600">Drafts</h3>

          <p className="text-3xl font-bold mt-2">
            {post.filter((item) => item.status === "Draft").length}
          </p>
        </div>

        <div className="bg-purple-50 p-5 rounded-xl">
          <h3 className="text-gray-600">Categories</h3>

          <p className="text-3xl font-bold mt-2">
            {new Set(post.map((item) => item.category)).size}
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-6 mt-8">
        {post.map((blog) => (
          <DashboardCard
            key={blog._id}
            title={blog.title}
            category={blog.category}
            content={blog.content}
            author={blog.author}
            description={blog.description}
            deletePost={deletePost}
            id={blog._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
