import React from 'react';
import VizBook1 from './pages/Class8/Science/Magnetism/VizBook1';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<VizBook1/>}>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
