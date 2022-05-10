import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProjectRoutes from './Routes';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <ProjectRoutes />
      </div>
    </Router>
  );
}

export default App;
