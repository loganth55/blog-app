import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";

function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen px-5 py-6">
      <h1 className="text-2xl font-bold mb-8">
        ADMIN <span className="text-blue-600">PANEL</span>
      </h1>

      <div className="space-y-8">
        {/* Dashboard */}
        <div>
          <Link to="/admin">
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-blue-100 transition">
              <MdDashboard size={20} />
              <span>Dashboard</span>
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
              <Link
                to="/posts"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <MdPostAdd size={20} />
                <span>Posts</span>
              </Link>
            </li>

            <li>
              <Link
                to="/adminCategory"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <BiSolidCategory size={20} />
                <span>Categories</span>
              </Link>
            </li>

            <li>
              <Link
                to="/comment"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <LiaComments size={22} />
                <span>Comments</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Audience */}
        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-3">
            Audience
          </p>

          <ul className="space-y-4">
            <li>
              <Link
                to="/subscribers"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <CgProfile size={20} />
                <span>Subscribers</span>
              </Link>
            </li>

            <li>
              <Link
                to="/messages"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <BiSolidMessageSquareDetail size={20} />
                <span>Messages</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* System */}
        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-3">
            System
          </p>

          <ul className="space-y-4">
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <IoSettingsSharp size={20} />
                <span>Settings</span>
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <CgProfile size={20} />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className="pt-6 border-t">
          <button className="flex items-center gap-3 text-red-600 hover:text-red-700 transition">
            <TbLogout2 size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
