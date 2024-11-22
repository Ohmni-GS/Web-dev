import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "../style/GeracaoCard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

// Registro das dependências do Chart.js
ChartJS.register(ArcElement, Tooltip);

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
        setCorrente(data.corrente);
        setTensao(data.tensao);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []);

  // gráfico de Corrente
  const correnteData = {
    labels: [""], // ESSA BOSTA N SAI
    datasets: [
      {
        data: [corrente, 10 - corrente], // Corrente e restante
        backgroundColor: ["#0D9FDF", "#1a1d29"], // Cor para corrente e fundo
        hoverBackgroundColor: ["#0B7FBD", "#1a1d29"], // Cor ao passar o mouse
        borderWidth: 0,
      },
    ],
  };

  // Dados para o gráfico Doughnut de Tensão
  const tensaoData = {
    datasets: [
      {
        data: [tensao, 10 - tensao], // Tensão e restante
        backgroundColor: ["#12F298", "#1a1d29"], // Cor para tensão e fundo
        hoverBackgroundColor: ["#0FBF88", "#1a1d29"], // Cor ao passar o mouse
        borderWidth: 0,
      },
    ],
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
              <Doughnut
                data={correnteData}
                options={{
                  plugins: { tooltip: { enabled: false } }, // Sem tooltip
                  cutout: "80%", // Estilo donut
                }}
                className="energy-chart"
              />
            </div>
            <div>
              <p className="energy-value-title">TENSÃO</p>
              <p className="energy-value">{tensao} V (vmp)</p>
              <Doughnut
                data={tensaoData}
                options={{
                  plugins: { tooltip: { enabled: false } }, // Sem tooltip
                  cutout: "80%", // Estilo donut
                }}
                className="energy-chart"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnergyGenerationCard;
