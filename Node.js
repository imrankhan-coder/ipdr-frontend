import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MultiTenant from "./pages/MultiTenant";
import LawEnforcementPortal from "./pages/LawEnforcementPortal";
import SSOAuth from "./components/SSOAuth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/multi-tenant" element={<MultiTenant />} />
          <Route path="/law-enforcement" element={<LawEnforcementPortal />} />
          <Route path="/sso" element={<SSOAuth />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
