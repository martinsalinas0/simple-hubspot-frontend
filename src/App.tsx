import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Companies from "./routes/Companies";
import Profile from "./routes/Profiles";
import "./styles/App.css";
import Buttons from "./routes/ButtonsPage";
import CompanyProfile from "./routes/CompanyProfile";

// Your other components
const Home: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Home</h1>
    <p className="text-gray-600">Welcome to your application!</p>
    <p>Hi how are you? </p>
    <button></button>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/companies"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Companies
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Profile
                </Link>
                <button className="bg-green-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded">
                  Create a company
                </button>
                <Link to="/buttons">Buttons</Link>
                <Link to="/companyProfile">SINGLE COMPANY</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/companyProfile" element={<CompanyProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
