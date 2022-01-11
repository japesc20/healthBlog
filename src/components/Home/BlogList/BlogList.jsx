import React from 'react'
import Blog from '../../../pages/blog/Blog'
import BlogItem from './BlogItem/BlogItem'

import './BlogList.css'

const BlogList = ({ blogs }) => (
 <div className='blogList-wrap'>
  {blogs.map(blog => (
   <BlogItem blog={blog} key={blog.id} />
   ))}  
 </div>
 )

export default BlogList
