import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "../style/GeracaoCard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js";

// Registro das dependências do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, LineElement);

const EnergyGenerationCard = () => {
  // Estados para os dados e carregamento
  const [corrente, setCorrente] = useState(0);
  const [tensao, setTensao] = useState(0);
  const [loading, setLoading] = useState(true);

  // Busca de dados da API ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ohmni-api.onrender.com/devices/00C40A24/latest");
        const data = await response.json();
        setCorrente(data.corrente); // Atualiza a corrente
        setTensao(data.tensao); // Atualiza a tensão
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []);

  // Dados do gráfico
  const data = {
    labels: ["Corrente", "Tensão"], // Rótulos
    datasets: [
      {
        label: "Medições",
        data: [corrente, tensao], // Dados provenientes da API
        backgroundColor: ["#0D9FDF", "#12F298"], // Cores das barras
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  // Configurações do gráfico
  const options = {
    plugins: {
      legend: { display: false }, // Oculta a legenda
    },
    scales: {
      x: { display: false }, // Oculta o eixo X
      y: { display: false }, // Oculta o eixo Y
    },
  };

  return (
    <div className="energy-card">
      <p className="energy-title">Geração de Energia</p>
      {loading ? (
        // Exibe mensagem de carregamento enquanto os dados não estão disponíveis
        <p>Carregando...</p>
      ) : (
        <>
          <div className="energy-values">
            <div>
              <p className="energy-value-title">CORRENTE</p>
              <p className="energy-value">{corrente} A (imp)</p>
            </div>
            <div>
              <p className="energy-value-title">TENSÃO</p>
              <p className="energy-value">{tensao} V (vmp)</p>
            </div>
          </div>
          <div className="energy-chart">
            <Line data={data} options={options} />
          </div>
        </>
      )}
    </div>
  );
};

export default EnergyGenerationCard;
