import React from "react";
import Sidebar from './components/Sidebar'
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import AdminCategory from "./pages/AdminCategory"



import Posts from "./pages/Posts"
import CreateBlog from "./pages/CreateBlog";

function App(){

    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/createpost" element={<CreateBlog />}></Route>
          <Route path="/editpost/:id" element={<EditBlog />}></Route>
          <Route path="/getsinglepost/:id" element={<BlogDetails />}></Route>
          <Route path="/adminCategory" element = {<AdminCategory />}></Route>
        </Routes>
      </div>
    );

}
export default App