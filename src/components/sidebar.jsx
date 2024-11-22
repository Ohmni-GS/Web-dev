import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaLightbulb, FaCogs, FaUser, FaSignOutAlt } from "react-icons/fa"; // Ícones
import "../style/sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      <nav className="sidebar-navigation">
        <NavLink to="/" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          Dashboard
        </NavLink>
        <NavLink to="/comunidade" className="sidebar-link">
          <FaUsers className="sidebar-icon" />
          Comunidade
        </NavLink>
        <NavLink to="/insights" className="sidebar-link">
          <FaLightbulb className="sidebar-icon" />
          Insights
        </NavLink>
        <NavLink to="/dispositivos" className="sidebar-link">
          <FaCogs className="sidebar-icon" />
          Dispositivos
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <p className="sidebar-account-title">Sua Conta</p>
        <NavLink to="/perfil" className="sidebar-link">
          <FaUser className="sidebar-icon" />
          Seu Perfil
        </NavLink>
        <NavLink to="/logout" className="sidebar-link-logout">
          <FaSignOutAlt className="sidebar-icon" />
          Desconectar-se
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
