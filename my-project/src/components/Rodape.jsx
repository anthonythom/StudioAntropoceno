import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
  letter-spacing: 0;
  color: #6b6969;
`;

const Rodape = () => {
  return (
    <Container>
      <h1>
        Studio Antropoceno® • São Paulo Capital • Brazil •
        studioantropoceno@gmail.com • +55 11 98831-6036
      </h1>
    </Container>
  );
};

export default Rodape;
