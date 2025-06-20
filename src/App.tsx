import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Buttons from "./pages/ButtonsPage";

import CompaniesList from "./pages/CompanyList";
import AddCompPage from "./pages/AddCompPage";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CompanyDetails from "./pages/CompanyDetailsPage";
import EditCompany from "./pages/EditCompany";
import AllCompaniesDashboard from "./pages/allCompaniesDashboard";

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
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/companies" element={<CompaniesList />} />
            <Route path="/add-company" element={<AddCompPage />} />
            <Route path="/company/:id" element={<CompanyDetails />} />
            <Route path="/company/edit/:id" element={<EditCompany />} />
            <Route path="/testcomps" element={<AllCompaniesDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
