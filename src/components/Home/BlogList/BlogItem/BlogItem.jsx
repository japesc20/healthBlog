import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip/Chip'

import './BlogItem.css'

// Variable set to identify each property inside the array of blog objects "Data.js"
const BlogItem = ({ 
  blog: { 
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover
  },
  }) => (
  <div className='blogItem-wrap'>
   <img src={cover} alt="cover" className='blogItem-cover'/>
   <Chip label={category} />
   <Link to={`/blog/${id}`} className='blogItem-title-link'><h3>{title}</h3></Link>
   <p className='blogItem-desc'>{description}</p>

   <footer>
     <div className="blogItem-author">
       <img src={authorAvatar} alt='avatar' />
       <div>
         <h6>{authorName}</h6>
         <p>{createdAt}</p>
       </div>
     </div>
      <Link to={`/blog/${id}`} className='blogItem-link'> Read More → </Link>
   </footer>
  </div>
 )


export default BlogItem
