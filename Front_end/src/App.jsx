import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { StateProvider } from './context/Statecontext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'; 

const App = () => {
  return (
    <StateProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600"> {/* Gradient background */}
            <header className="bg-red-600 text-white py-6 text-center shadow-lg"> {/* Bold header with shadow */}
              <h1 className="text-4xl font-extrabold tracking-wide text-yellow-50">Pokémon Explorer</h1> {/* Large, bold font */}
            </header>

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <footer className="bg-gray-800 text-white py-4 text-center mt-8">
              {/* Optional footer content */}
              <p className="text-sm">© 2024 Pokémon Explorer. All Rights Reserved.</p>
            </footer>
          </div>
        </Router>
      </ErrorBoundary>
    </StateProvider>
  );
};

export default App;
