import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/Dashboard";
import Dispositivos from "./pages/Dispositivos";
import Insights from "./pages/Insights";
import Moradores from "./pages/Moradores";
import MoradorDetalhes from './pages/MoradorDetalhes';
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
          <Route path="/" element={<ProtectedLayout />}>
            <Route index element={<Dashboard />} /> {/* Rota inicial */}
            <Route path="comunidade" element={<Moradores />} />
            <Route path="/moradores/:id" element={<MoradorDetalhes />} />
            <Route path="insights" element={<Insights />} />
            <Route path="dispositivos" element={<Dispositivos />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
        ) : (
          // Redireciona para login se não autenticado
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;


