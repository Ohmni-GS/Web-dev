import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css"; 
import loginBg from '../assets/loginbg.jpg'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Salvar o login no localStorage
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
    }

    // Redireciona para a Dashboard
    navigate("/");
  };

  return (
    <div className="login-container">
      {/* Lado esquerdo com imagem */}
      <div className="login-left">
        <img src={loginBg} alt="Login Background" className="login-bg" />
        <div className="image-placeholder">
          <p>Esse texto deve ficar sobre a imagem</p>
        </div>
      </div>

      {/* Lado direito com formulário */}
      <div className="login-right">
        <h1>ΩHMNI</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Seja bem-vindo(a)!</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Seu endereço de Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-remember">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Lembrar de mim</label>
          </div>
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>
        <p>@2024 Marcela T. - Matheus V. - Matheus Q. </p>
      </div>
    </div>
  );
};

export default Login;