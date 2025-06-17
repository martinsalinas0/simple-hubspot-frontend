import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Buttons from "./routes-pages/ButtonsPage";
import CompanyProfile from "./routes-pages/SingleCompany";
import SingleCompany from "./routes-pages/SingleCompany";
import CompaniesList from "./routes-pages/CompanyList";
import AddCompPage from "./routes-pages/AddCompPage";
import Navbar from "./components/NavBar";
import HomePage from "./routes-pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Nav bar */}
        <Navbar />

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/single" element={<SingleCompany />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/companyProfile" element={<CompanyProfile />} />
            <Route path="/companies" element={<CompaniesList />} />
            <Route path="/add-company" element={<AddCompPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
