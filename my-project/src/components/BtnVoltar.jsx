import React from "react";
import styled from "styled-components";

const Button = styled.div`
height: 100px;
  display: flex;

  color: black;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  z-index: 1;

`;

const BtnVoltar = () => {
  return (
    <Button class="back-to-top" data-hover-hint="backToTop">
      <a class="nav-link" href="./trabalhos">
        <span class="arrow">&uarr;</span>
        <span class="preserve-whitespace"> Voltar</span>
      </a>
    </Button>
  );
};

export default BtnVoltar;
