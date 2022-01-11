import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'

import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
      </Routes>
    </div>
  )
}

export default App
