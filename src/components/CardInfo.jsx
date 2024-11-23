import React, { useEffect, useState } from "react";
import "../style/CardInfo.css"; // Certifique-se de criar este arquivo
import { FaBolt, FaHome, FaSolarPanel } from "react-icons/fa"; // Biblioteca de ícones FontAwesome

const CardInfo = ({ title, value, subtitle, icon, variation }) => {
  return (
    <div className="card-info">
      <div className="card-info-content">
        <div className="card-info-text">
          <p className="card-info-title">{title}</p>
          <h2 className="card-info-value">{value}</h2>
        </div>
        <div className="card-info-icon">{icon}</div>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6741208ed0b59228b7f24fc8.mockapi.io/OHMNI/V1/users"
        );
        const result = await response.json();
        if (result.length > 0) {
          // Considera apenas o primeiro item da resposta
          setData(result[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="dashboard-cards">
      <CardInfo
        title="Consumo nos últimos 5 dias"
        value={`${data.cosumo} kWh`}
        subtitle="+5%"
        icon={<FaBolt />}
        variation="positive"
      />
      <CardInfo
        title="Número de moradores"
        value={`${data.houses} casas`}
        subtitle="estável"
        icon={<FaHome />}
        variation="stable"
      />
      <CardInfo
        title="Geração nos últimos 5 dias"
        value={`${data.geracao} kWh`}
        subtitle="-2%"
        icon={<FaSolarPanel />}
        variation="negative"
      />
    </div>
  );
};

export default DashboardCards;