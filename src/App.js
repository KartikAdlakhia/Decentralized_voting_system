import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RoleSelection from "./components/RoleSelection";
import VoterDashboard from "./components/VoterDashboard";
import CandidateDashboard from "./components/CandidateDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/voter-dashboard" element={<VoterDashboard />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;