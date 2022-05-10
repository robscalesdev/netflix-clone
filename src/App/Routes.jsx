import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Layout/Navbar'
import Sidebar from '../Components/Layout/Sidebar'
import Home from '../pages/Home'

import history from '../browserHistory';
import Movie from '../pages/Movie';

const ProjectRoutes = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
      setIsOpen(!isOpen)
  }

  return (
  <main>
    <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <Routes history={history}>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/video/:movieName'
        element={<Movie />}
      />
    </Routes>
  </main>
)};

export default ProjectRoutes;
