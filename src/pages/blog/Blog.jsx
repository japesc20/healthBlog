import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Data from '../../config/data'
import Chip from '../../components/common/Chip/Chip'
import EmptyList from '../../components/common/EmptyList/EmptyList'

import './Blog.css'


const Blog = () => {

    // 1. useParams initates the use of ID for specific blog / 2. Setting state for individual blogs id's
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
                    The background in fitness and health definitely isn't exciting nor is it short, the road was long and rough among many other things. 
                    <br />
                    I began after highschool in 2008, I asked my best friend who was a lifting stud to show me... literally anything. 
                    <br /><br />
                    We ended up lifting together for another year and half, with a lot of knowledge gained and eventually to find out a shoulder injury later. 
                    I did something very much out of character, I joined the Marine Corps.
                    <br /><br />
                    </p>
                </div> : (
                    <EmptyList />
                )
            }
        </div>
    )
}

export default Blog
