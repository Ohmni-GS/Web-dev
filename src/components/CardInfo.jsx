import React from "react";
import "../style/CardInfo.css"; // Certifique-se de criar este arquivo
import { FaBolt, FaHome, FaSolarPanel } from "react-icons/fa"; // Biblioteca de ícones FontAwesome

const CardInfo = ({ title, value, subtitle, icon, variation }) => {
  return (
    <div className="card-info">
      <div className="card-info-content">
        <div className="card-info-text">
          <p className="card-info-title">{title}</p>
          <h2 className="card-info-value">{value}</h2>
          {/* <p className={`card-info-subtitle ${variation}`}>
            {subtitle}
          </p> */}
        </div>
        <div className="card-info-icon">{icon}</div>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      <CardInfo
        title="Consumo nos últimos 5 dias"
        value="132 kWh"
        subtitle="+5%"
        icon={<FaBolt />}
        variation="positive" // positive ou negative
      />
      <CardInfo
        title="Número de moradores"
        value="14 casas"
        subtitle="estável"
        icon={<FaHome />}
        variation="stable"
      />
      <CardInfo
        title="Geração nos últimos 5 dias"
        value="150 kWh"
        subtitle="-2%"
        icon={<FaSolarPanel />}
        variation="negative"
      />
    </div>
  );
};

export default DashboardCards;
