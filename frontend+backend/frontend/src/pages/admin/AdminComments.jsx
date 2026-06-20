import React, { useEffect, useState } from "react";
import { getComment, deleteComment } from "../../services/commentApi";

function AdminComments() {
  const [comments, setComments] = React.useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getcomment = async () => {
      try {
        const data = await getComment();
        setComments(data);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    getcomment();
  }, []);

  const handleDeleteComment = async (id) => {
    try {
      await deleteComment(id);
      setComments(comments.filter((item) => item._id !== id));
    } catch (err) {
      console.log("Error fetching posts:", err);
    }
  };

  const filteredComments = comments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Comments Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage and moderate user comments
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
          <h2 className="text-slate-500 text-sm uppercase tracking-wide">
            Total Comments
          </h2>

          <p className="text-4xl font-bold mt-2">{comments.length}</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search comments..."
            className="w-full bg-white rounded-2xl shadow-md p-4 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Comments Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredComments.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {item.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>

                  <p className="text-sm text-slate-500">{item.email}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 mb-4">
                <p className="text-slate-700">{item.comment}</p>
              </div>

              <div className="space-y-2 mb-5">
                <p className="text-sm text-slate-500">📝 Post: {item.postId}</p>
              </div>

              <button
                onClick={() => handleDeleteComment(item._id)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl transition-all"
              >
                Delete Comment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AdminComments;
