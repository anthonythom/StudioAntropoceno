import styled from "styled-components";


import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Rodape from "./components/Rodape";
import Trabalhos from "./pages/Trabalhos/Trabalhos";
import BtnVoltar from "./components/BtnVoltar"

const Container = styled.div`
  height: 100vh;

  scroll-behavior: smooth;

  overflow-y: auto;
  scrollbar-width: none;
  color: #e1e1e6;
  /* background-image: conic-gradient(from 90deg at -10% 100%,#fafafa 0deg,#067aff 90deg,#ebe8dc 1turn); */

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Navbar  />
      <Home id="/"  />
      <Sobre id="sobre" />
      <Trabalhos id="trabalhos"/>
      <Contato id="contato"/>
      <Rodape />
      <BtnVoltar/>
    </Container>
  );
}

export default App;
