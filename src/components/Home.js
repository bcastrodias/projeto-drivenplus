import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../contexts/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { userData, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const membership = JSON.parse(localStorage.getItem("membership"));
  const cancelPlan = () => {
    axios
      .delete(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      )
      .then(() => navigate("/subscriptions"));
  };

  if (!membership || !userData) {
    return <></>;
  }
  return (
    <Container>
      <img src={membership.image} />
      <Text>Olá, {userData.name}</Text>
      {membership.perks?.map((perk) => {
        return (
          <Button onClick={() => window.open(perk.link)}>{perk.title}</Button>
        );
      })}

      <Button onClick={() => navigate("/subscriptions")}>Mudar plano</Button>
      <Button onClick={cancelPlan}>Cancelar plano</Button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  align-items: center;
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

const Text = styled.p`
  height: 38px;
  width: 263px;
  border-radius: undefinedpx;
  color: white;
`;
