import React from 'react'

import { Route, Routes } from "react-router-dom";
import HomePage from '../components/Home/HomePage';

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

    </div>
  )
}
export default AllRoutes


