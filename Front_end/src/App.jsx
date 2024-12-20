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
          <div className="min-h-screen bg-blue-5000">
            <header className="bg-blue-600 text-white py-4 text-center">
              <h1 className="text-2xl font-bold">Pokemon Explorer</h1>
            </header>

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <footer className="bg-gray-800 text-white py-4 text-center mt-8">
              {/* Optional footer content */}
            </footer>
          </div>
        </Router>
      </ErrorBoundary>
    </StateProvider>
  );
};

export default App;
