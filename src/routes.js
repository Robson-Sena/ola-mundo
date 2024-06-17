import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import NaoEcontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        {/* 
        
        Na rota "/", a rota a ser renderizada é:

        <PaginaPadrao>
        <Inicio />
        <PaginaPadrao>

        Na rota "/Sobremim", a rota a ser renderizada é:

        <PaginaPadrao>
        <SobreMim />
        <PaginaPadrao>

        */}

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEcontrada />} />        
        
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

  export default AppRoutes;