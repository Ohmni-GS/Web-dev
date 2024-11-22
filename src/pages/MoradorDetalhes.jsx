import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardDetalhe from '../components/CardDetalhe';
import DispositivosDetalhe from '../components/DispositivosDetalhe';
import ConsumoAtualDetalhe from '../components/ConsumoAtual';
import ConsumoAcumuladoDetalhe from '../components/ConsumoAcumulado';
import '../style/MoradorDetalhes.css';
import '../style/Dashboard.css';

const MoradorDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dados simulados
  const moradores = [
    { id: "255", nome: 'Mark Johnson', email: 'mark@example.com' },
    { id: "123", nome: 'Ana Silva', email: 'ana@example.com' },
  ];

  const morador = moradores.find((m) => m.id === id);

  if (!morador) {
    return <h1 className="morador-detalhes-title">Morador não encontrado!</h1>;
  }

  return (
    <div className="morador-detalhes-container">
      <div className="background"></div>
      <h1 className="morador-detalhes-title">Detalhes do Morador</h1>
      
      {/* Cards principais */}
      <div className="morador-detalhes-content">
        {/* Card de informações gerais */}
        <CardDetalhe
          titulo="Informações do Morador"
          conteudo={
            <>
              <p>Nome: {morador.nome}</p>
              <p>Email: {morador.email}</p>
              <p>ID: {morador.id}</p>
            </>
          }
        />

        {/* Card de dispositivos */}
        <DispositivosDetalhe
          dispositivos={[
            { id: 'FO3F000', status: 'Conectado' },
            { id: 'FO3F001', status: 'Desconectado' },
          ]}
        />

        {/* Card de consumo atual */}
        <ConsumoAtualDetalhe
          corrente="8.38 A (imp)"
          tensao="16.91 V (vmp)"
          consumo="9.3 Wh"
        />

        {/* Card de consumo acumulado */}
        <ConsumoAcumuladoDetalhe
          media="23,6 kWh"
          total="258,6 W"
          grafico={[1, 2, 4, 3, 6, 8, 5]} // Valores fictícios para o gráfico
        />
      </div>

      {/* Botão de voltar */}
      <button className="morador-voltar-btn" onClick={() => navigate(-1)}>
        Voltar
      </button>
    </div>
  );
};

export default MoradorDetalhes;
