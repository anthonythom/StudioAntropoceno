import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Chatbot/ChatBot.css"

const Container = styled.div`
  position: fixed;
  top: 47%;
  left: 80%;
  z-index: 1;
  background-color: #f4f4f4;
  border-radius: 0px 20px 2px 25px;
  padding: 16px;
  height: 500px;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  overflow-y: auto;
  max-height: 400px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Message = styled.div`
  display: flex;
  justify-content: end;
  border-radius: 25px;
  padding: 16px;
  width: 70%;
  margin-bottom: 8px;
  background-color: palegoldenrod;
`;

const UserMessage = styled(Message)`
  text-align: right;
  color: #333;
`;

const BotMessage = styled(Message)`
  text-align: left;
  color: #555;
  opacity: 0;
  animation: fadeIn 0.5s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;




const InputContainer = styled.div`
  display: flex;
  margin-top: 180px;
  border: 1px solid #705d3f;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 4px;
  border: none;
`;

const SendButton = styled.button`
  background-color: #705d3f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 4px;
  cursor: pointer;

  &:hover {
    background-color: #705d3f;
  }
`;

const HeaderChat = styled.div`
  background-color: #705d3f;
  color: white;
  text-transform: uppercase;
  position: fixed;
  border: none;
  border-radius: 20px 0px 0px 25px;
  top: 45%;
  left: 80%;
  z-index: 1;
  width: 384px;
  padding: 4px 8px;
  cursor: pointer;
 
  &:hover {
    background-color: #705d3f;
  }
`;

const FormContainer = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
align-items: center;
justify-content: center;
`;

const Chatbot = ({ isOpen, handleChatButtonClick }) => {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: ""
  });

  const botMessages = [
    "Olá! Bem vindo ao Studio Duni!",
    "Esses são os nossos combos:",
    "1. 5 imagens por R$120 cada\n2. 10 imagens por R$100 cada\n3. Mais de 10 imagens, R$90 cada",
    "Digite o número do combo desejado:"
  ];

  useEffect(() => {
    const delay = 1500;

    if (step < botMessages.length) {
      const timeout = setTimeout(() => {
        setMessages([...messages, { text: botMessages[step], isUser: false }]);
        setStep(step + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [step]);

  const handleSendButtonClick = () => {
    if (!isNaN(userInput) && userInput >= 1 && userInput <= 3) {
        setMessages([...messages, { text: userInput, isUser: true }]);
        setStep(step + 1);
        setUserInput("");
      } else {
        setMessages([...messages, { text: "Por favor, escolha uma das opções disponíveis (1, 2 ou 3).", isUser: false }]);
      }
  };


  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: ""
    });
    setStep(0);
    setMessages([...messages, { text: "Perfeito! Entraremos em contato o mais breve possível.", isUser: false }]);
    clearChat();
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const clearChat = () => {
    setMessages([]);
  };

  

  return (
    <Container isOpen={isOpen}>
      <HeaderChat className="ChatDuni">Chat Duni</HeaderChat>
      {messages.map((message, index) =>
        message.isUser ? (
          <UserMessage key={index}>{message.text}</UserMessage>
        ) : (
          <BotMessage key={index}>{message.text}</BotMessage>
        )
      )}

      {step === botMessages.length && (
        <InputContainer>
          <TextInput
            id="user-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <SendButton onClick={handleSendButtonClick}>Enviar</SendButton>
        </InputContainer>
      )}

      {step === botMessages.length + 1 && (
        <BotMessage>
          Perfeito! Envie os dados à seguir e te encaminharemos para a parte de envio de arquivos
        </BotMessage>
      )}

      {step === botMessages.length + 1 && (
        <FormContainer isVisible={step === botMessages.length + 1}>
          <form  onSubmit={handleFormSubmit}>
            <TextInput
              id="full-name"
              name="fullName"
              type="text"
              placeholder="Nome Completo"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextInput
              id="phone"
              name="phone"
              type="tel"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextInput
              id="company-name"
              name="companyName"
              type="text"
              placeholder="Nome da Empresa/Escritório"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <SendButton type="submit">Enviar</SendButton>
          </form>
        </FormContainer>
      )}
    </Container>
  );
};

export default Chatbot;
