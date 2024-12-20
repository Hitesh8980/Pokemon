// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4 text-center">
          <h1 className="text-2xl font-bold">Pokemon Explorer</h1>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <footer className="bg-gray-800 text-white py-4 text-center mt-8">
          {/* <p>© 2024 Pokemon Explorer. All Rights Reserved.</p> */}
        </footer>
      </div>
    </Router>
  );
};

export default App;
