import React from 'react'
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import HomePage from '../components/HomePage';

function AllRoutes() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/price" element={<h1>Price</h1>} />
      <Route path="/support" element={<h1>Support</h1>} />
      <Route path="/blog" element={<h1>Blog</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      
    </Routes>
=======
import { Route, Routes } from "react-router-dom"
import About from '../components/Blogs/BlogHome/About'
import GuestPost from '../components/Blogs/BlogHome/GuestPost'
import Home from '../components/Blogs/BlogHome/Home'
import News from '../components/Blogs/BlogHome/News'
import Productivity from '../components/Blogs/BlogHome/Productivity'
import Search from '../components/Blogs/BlogHome/Search'
import UseCases from '../components/Blogs/BlogHome/UseCases'
import Navbar from '../components/Blogs/BlogNavbar/Navbar'
function AllRoutes() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/productivity' element={<Productivity />} />
        <Route path='/usecases' element={<UseCases />} />
        <Route path='/about' element={<About />} />
        <Route path='/guestpost' element={<GuestPost />} />
        <Route path='/search' element={<Search />} />
      </Routes>
>>>>>>> main
    </div>
  )
}

<<<<<<< HEAD
export default AllRoutes
=======
export default AllRoutes
>>>>>>> main
