import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API =
  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const navigate = useNavigate();
  const onPressButton = () => {
    axios
      .post(
        "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",

        {
          email,
          name,
          cpf,
          password,
        }
      )
      .then(() => navigate("/"))
      .catch(() => alert("Preencha adequadamente"));
  };

  return (
    <Container>
      <Input
        placeholder="Nome"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        placeholder="CPF"
        name="cpf"
        value={cpf}
        onChange={(e) => setCPF(e.target.value)}
        type="number"
      ></Input>
      <Input
        placeholder="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        placeholder="Senha"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Button onClick={onPressButton}> CADASTRAR </Button>
      <Login> Já possuí uma conta? Entre aqui </Login>
    </Container>
  );
};

export default Register;

const Login = styled.p`
  color: white;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 122px;
  width: 298px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
`;

const Input = styled.input`
  height: 52px;
  width: 299px;
  border-radius: 8px;
  padding-bottom: 5px;
`;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  align-items: center;
`;
