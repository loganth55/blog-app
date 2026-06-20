import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
