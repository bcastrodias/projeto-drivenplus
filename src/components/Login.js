import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Layer
        src={`/home/blackbox/Projetos/driven/projeto-drivenplus/src/img/Layer1.png`}
      ></Layer>
      <Input placeholder="E-mail"></Input>
      <Input placeholder="Senha"></Input>
      <Button>
        <Link to="/subscription">ENTRAR </Link>
      </Button>
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
