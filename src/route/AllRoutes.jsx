import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import About from "../components/Blogs/BlogHome/About";
import GuestPost from "../components/Blogs/BlogHome/GuestPost";
import News from "../components/Blogs/BlogHome/News";
import Productivity from "../components/Blogs/BlogHome/Productivity";
import Search from "../components/Blogs/BlogHome/Search";
import SinglePage from "../components/Blogs/BlogHome/SinglePage";
import UseCases from "../components/Blogs/BlogHome/UseCases";
import HomePage from "../components/Home/HomePage";
import BlogHome from "../components/Blogs/BlogHome/BlogHome";
import PageNotFound from "../components/PageNotFound";
import MainApp from "../components/MainApp";
import PrivateRoute from "../components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/price" element={<h1>Price</h1>} />
        <Route path="/support" element={<h1>Support</h1>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<SinglePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/guestpost" element={<GuestPost />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <MainApp />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
