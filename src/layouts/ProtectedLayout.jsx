import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ProtectedLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "250px", padding: "20px", flexGrow: 1 }}>
        <Outlet /> {/* Renderiza as rotas aninhadas */}
      </div>
    </div>
  );
};

export default ProtectedLayout;
