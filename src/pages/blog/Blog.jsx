import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Data from '../../config/data'
import Chip from '../../components/common/Chip/Chip'
import EmptyList from '../../components/common/EmptyList/EmptyList'

import './Blog.css'


const Blog = () => {

    // 1. useParams initates the use of ID for specific blog / 2. Setting state for individual blogs id's / 3. Map Data to receive fullDescription
    const {id} = useParams();
    const [blog, setBlog] = useState(null)

    useEffect(() => {

        // Var. defined that blog is equal to the blog id clicked
        let blog = Data.find(blog => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog)
        }
    }, [])


    return (
        <div>
            <Link to='/' className='blog-goBack'>
                <span>&#8592;</span> Go Back 
            </Link>
            {
                blog ? <div className='blog-wrap'>
                    <header>
                        <p className="blog-date">Published {blog.createdAt}</p>
                        <h1>{blog.title}</h1>
                        <div className="blog-subCategory">

                            {/* Maps through the subCategory properties and displays in <Chip /> */}
                            {blog.subCategory.map((category, index) => 
                            <div>
                                <Chip key={index} label={category} />
                            </div>)}
                        </div>
                    </header>
                    <img src={blog.cover} alt="cover" />
                    <p className="blog-desc">
                        <ReactMarkdown  className='react-markdown' remarkPlugins={[remarkGfm]} children={blog.description} />
                        <hr />
                    </p>
                    <div className="footer">
                        <img src={blog.authorAvatar} />
                        <h4>{blog.authorName}</h4>
                        <p>"This will be my footer quote!"</p>
                    </div>
                </div> : (
                    <EmptyList />
                )
            }
        </div>
    )
}

export default Blog
