import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/admin/Dashboard";
import EditBlog from "./pages/admin/EditBlog";
import AdminBlogDetails from "./pages/admin/AdminBlogDetails";
import BlogDetails from "./pages/user/BlogDetails";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminSubscriber from "./pages/admin/AdminSubscriber";
import AdminSettings from "./pages/admin/AdminSettings";
import Posts from "./pages/admin/Posts";
import CreateBlog from "./pages/admin/CreateBlog";
import AdminComments from "./pages/admin/AdminComments";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

import Home from "./pages/user/Home";
import Blogs from "./pages/user/Blogs";
import Category from "./pages/user/Category";
import CategoryBlogs from './pages/user/CategoryBlogs'

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/createpost" element={<CreateBlog />} />
        <Route path="/editpost/:id" element={<EditBlog />} />
        <Route path="/getsinglepost/:id" element={<AdminBlogDetails />} />
        <Route path="/adminCategory" element={<AdminCategory />} />
        <Route path="/comment" element={<AdminComments />} />
        <Route path="/subscribers" element={<AdminSubscriber />} />
        <Route path="/settings" element={<AdminSettings />} />
      </Route>

      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/categories" element={<Category />}></Route>
      <Route path="/category/:categoryName" element={<CategoryBlogs />} />

      </Route>
    </Routes>
  );
}

export default App;
