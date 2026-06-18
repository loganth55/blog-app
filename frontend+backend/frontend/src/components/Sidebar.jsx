import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen px-5 py-6">
      <h1 className="text-2xl font-bold mb-8">
        ADMIN <span className="text-blue-600">PAGE</span>
      </h1>

      <div className="space-y-6">
        {/* Dashboard */}
        <div>
          <Link to="/">
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 cursor-pointer">
              📊 Dashboard
            </div>
          </Link>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-3">
            Content
          </p>

          <ul className="space-y-4">
            <li>
              <Link to="/posts" className="cursor-pointer hover:text-blue-600">
                📝 Posts
              </Link>
            </li>

            <li>
              <Link
                to="/adminCategory"
                className="cursor-pointer hover:text-blue-600"
              >
                📂 Categories
              </Link>
            </li>

            <li>
              <Link
                to="/leagalpages"
                className="cursor-pointer hover:text-blue-600"
              >
                📄 Legal Pages
              </Link>
            </li>
          </ul>
        </div>

        {/* Revenue */}
        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-3">
            Revenue
          </p>

          <ul>
            <li className="cursor-pointer hover:text-blue-600">
              📢 Ads Manager
            </li>
          </ul>
        </div>

        {/* Users & Social */}
        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-3">
            Users & Social
          </p>

          <ul className="space-y-3">
            <li className="cursor-pointer hover:text-blue-600">
              👤 Manage Admins
            </li>

            <li className="cursor-pointer hover:text-blue-600">💬 Messages</li>

            <li className="cursor-pointer hover:text-blue-600">
              👥 Subscribers
            </li>

            <li className="cursor-pointer hover:text-blue-600">
              🔗 Comment
            </li>
          </ul>
        </div>

        {/* Settings */}
        <div>
          <ul>
            <li className="cursor-pointer hover:text-blue-600">⚙ Settings</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
