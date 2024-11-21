import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Dispositivos from "./pages/Dispositivos";
import Insights from "./pages/Insights";
import Moradores from "./pages/Moradores";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

const App = () => {
  const isAuthenticated = true; // Altere isso para lógica real de autenticação.

  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Rotas Protegidas */}
        {isAuthenticated ? (
          <Route
            path="/"
            element={
              <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ marginLeft: "250px", padding: "20px", flexGrow: 1 }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/comunidade" element={<Moradores />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/dispositivos" element={<Dispositivos />} />
                    <Route path="/perfil" element={<Perfil />} />
                  </Routes>
                </div>
              </div>
            }
          />
        ) : (
          // Redireciona para login se não autenticado
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;


