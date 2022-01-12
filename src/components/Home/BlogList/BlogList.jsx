import React from 'react'
import BlogItem from './BlogItem/BlogItem'

import './BlogList.css'

const BlogList = ({ blogs }) => (
 <div className='blogList-wrap'>

   {/* Mapping through the blogs set in state "Home.jsx" and receiving each blog from Data.js  */}
  {blogs.map(blog => (
   <BlogItem blog={blog} key={blog.id} />
   ))}  
 </div>
 )

export default BlogList
