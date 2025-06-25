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



import OverallData from "./pages/OverallData";
import DashboardDragAndDrop from "./pages/DashboardDragAndDrop";
import PracticeDnD from "./pages/PracticeDragAndDrop";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-200">
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
            <Route path="/test" element={<PracticeDnD />} />
            <Route path="/dashboard" element={<DashboardDragAndDrop />} />
            <Route path="/data" element={<OverallData />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
