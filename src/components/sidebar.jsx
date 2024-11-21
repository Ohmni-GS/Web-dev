import React from "react";
import { NavLink } from "react-router-dom";
import "../style/sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        {/* Adicione aqui o PNG da logo */}
        <h1>OHMNI</h1>
      </div>
      <nav className="sidebar-navigation">
        <NavLink to="/" className="sidebar-link" activeClassName="sidebar-link-active">
          Dashboard
        </NavLink>
        <NavLink to="/comunidade" className="sidebar-link" activeClassName="sidebar-link-active">
          Comunidade
        </NavLink>
        <NavLink to="/insights" className="sidebar-link" activeClassName="sidebar-link-active">
          Insights
        </NavLink>
        <NavLink to="/dispositivos" className="sidebar-link" activeClassName="sidebar-link-active">
          Dispositivos
        </NavLink>
        <NavLink to="/perfil" className="sidebar-link" activeClassName="sidebar-link-active">
          Seu Perfil
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/logout" className="sidebar-link-logout">
          Desconectar-se
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
