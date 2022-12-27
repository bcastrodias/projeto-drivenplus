import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const onPressButton = () => {
    axios
      .post(
        "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",

        {
          email,
          password,
        }
      )
      .then((res) => {
        doLogin(res.data);
        if (res.data.membership) {
          navigate("/home");
        } else {
          navigate("/subscriptions");
        }
      })
      .catch(() => alert("Preencha adequadamente"));
  };

  return (
    <Container>
      <Layer
        src={`/home/blackbox/Projetos/driven/projeto-drivenplus/src/img/Layer1.png`}
      ></Layer>
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
      <Button onClick={onPressButton}>ENTRAR</Button>
      <Cadastro>
        <Link to="/sign-up"> Não possuí uma conta? Cadastre-se </Link>
      </Cadastro>
    </Container>
  );
};

export default Login;

const Input = styled.input`
  height: 52px;
  width: 299px;
  border-radius: 8px;
  padding-bottom: 5px;
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
const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Cadastro = styled.p`
  color: white;
`;

const Layer = styled.img`
  height: 49;
  width: 299px;
  border-radius: 0px;
`;
