import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Layout/Navbar'
import Home from '../pages/Home'

import history from '../browserHistory';
import Movie from '../pages/Movie';

const ProjectRoutes = () => {

  return (
  <main>
    <Navbar />
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
