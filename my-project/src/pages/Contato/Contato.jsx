import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  height: 100%;
`;

const Left = styled.div`
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
  color: black;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 90%;
  border-radius: 10px;
  margin: 5rem auto 0 auto;

  @media (max-width: 768px) {
   

    width: 100%;
    height: 150%;
    border-radius: 10px;


  }
`;

const Title = styled.h1`
  display: flex;
  font-size: 50px;
  font-weight: 200px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Desc = styled.p`
  font-size: 20px;

  display: flex;
  text-align: center;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 15px;
  background-color: #ececf3;

  border-radius: 15px;
  color: #000000;

`;

const TextArea = styled.textarea`
  padding: 20px;

  border-radius: 15px;
  color: #000000;
  background-color: #ececf3;

`;

const Button = styled.button`
 
    height: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    border: 1px;
    border-style: solid;
    border-radius: 15px;
    border-color:#000000 ;
    color:  #e1e1e6;
    background: var(--background);
    text-transform: uppercase;
    transition: all .3s ease;
 

  @media (min-width: 320px){
    padding: 12px 24px;
    justify-content: center;


}

&:hover {
    color: white;
    background-color: #6231cd  ;
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }
  
`;

const Contato = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du2spom",
        "template_v5bjspl",
        ref.current,
        "yM1q9gUGf8cqrIn4F"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact" className="header_link">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>
              Contato
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-envelope-open"
                viewBox="0 0 16 16"
              >
                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
              </svg>
            </Title>

            <Desc>
              Sinta-se à vontade para entrar em contato comigo enviando o
              formulário abaixo e retornarei o mais breve possível.
            </Desc>
            <Input placeholder="Nome" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Escreva sua mensagem:"
              name="message"
              rows={7}
            />
            <Button type="submit">Enviar</Button>
            {success &&
              "Sua mensagem foi enviada com sucesso! Em breve retornaremos :)"}
          </Form>
        </Left>
      </Container>
    </Section>
  );
};

export default Contato;
