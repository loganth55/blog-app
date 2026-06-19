import React from "react";
import Sidebar from './components/Sidebar'
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import AdminCategory from "./pages/AdminCategory"
import AdminSubscriber from "./pages/AdminSubscriber";
import AdminSettings from "./pages/AdminSettings"

import Posts from "./pages/Posts"
import CreateBlog from "./pages/CreateBlog";
import AdminComments from "./pages/AdminComments";

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
          <Route path = "/comment" element = {<AdminComments />}></Route>
          <Route path='/subscribers' element={<AdminSubscriber />}></Route>
          <Route path='/settings' element = {<AdminSettings />}></Route>
        </Routes>
      </div>
    );

}
export default App