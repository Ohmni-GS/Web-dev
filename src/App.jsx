import "./index.css";
import { Header } from "./componentes/Header.jsx";
import { Footer } from "./componentes/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;