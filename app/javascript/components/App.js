import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

const App = () => {
  return (<div>
    {/* nav */}
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/greeting">
        Greeting
      </Link>
    </nav>
    {/* routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </div>);
}

export default App;