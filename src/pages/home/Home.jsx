import React, { useState } from 'react'
import Header from '../../components/Home/Header/Header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import BlogList from '../../components/Home/BlogList/BlogList'
import EmptyList from '../../components/common/EmptyList/EmptyList'
import Data from '../../config/data'

import './Home.css'

const Home = () => {
    const [blogs, setBlogs] = useState(Data);
    const [searchKey, setSearchKey] = useState('')

    // Search Submit
    const handleSearchSubmit = event => {
        event.preventDefault();
        handleSearchResults();
    }

    // Search for blogs by category
    const handleSearchResults = () => {
        const allBlogs = Data;
        const filteredBlogs = allBlogs.filter((blog) => 
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
            blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    const handleClearSearch = () => {
        setBlogs(Data);
        setSearchKey('')
    }

    return (
        <div>
            {/* Page header */}
            <Header />
            {/* Search Bar */}
            <SearchBar 
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchSubmit}
                handleSearchKey={(e) => setSearchKey(e.target.value)} 
            />
            {/* Blog List / Empty List */}
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
    )
}

export default Home;
