import { deletepost } from "../../services/blogApi";
import { Link } from "react-router-dom";

function DashboardCard({
  title,
  category,
  content,
  author,
  description,
  id,
  deletePost,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-40 bg-slate-200"></div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Title */}
        <h2 className="font-bold text-xl mt-3">{title}</h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-2">{author}</p>

        {/* Description */}
        <p className="text-gray-600 mt-3">
          {description?.length > 80
            ? `${description.slice(0, 80)}...`
            : description}
        </p>

        {/* See More */}
        {description?.length > 80 && (
          <button className="text-blue-600 text-sm font-medium mt-2 hover:underline">
            See More →
          </button>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <Link to={`/getsinglepost/${id}`}>
            <button className="px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200">
              View
            </button>
          </Link>

          <Link to={`/editpost/${id}`}>
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
              Edit
            </button>
          </Link>

          <button
            onClick={() => deletePost(id)}
            className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
