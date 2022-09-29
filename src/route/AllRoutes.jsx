import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import About from "../components/Blogs/BlogHome/About";
import GuestPost from "../components/Blogs/BlogHome/GuestPost";
// import Home from "../components/Blogs/BlogHome/Home";
import News from "../components/Blogs/BlogHome/News";
import Productivity from "../components/Blogs/BlogHome/Productivity";
import Search from "../components/Blogs/BlogHome/Search";
import UseCases from "../components/Blogs/BlogHome/UseCases";
import Navbar from "../components/Blogs/BlogNavbar/Navbar";
import HomePage from "../components/Home/HomePage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price" element={<h1>Price</h1>} />
        <Route path="/support" element={<h1>Support</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/news" element={<News />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/guestpost" element={<GuestPost />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
