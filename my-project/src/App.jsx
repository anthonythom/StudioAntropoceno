import styled from "styled-components";



import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


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
     <Navbar />
     <Outlet />
    </Container>
  );
}

export default App;
