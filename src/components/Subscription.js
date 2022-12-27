import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/auth";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const { auth } = useContext(AuthContext);
  const [planos, setPlanos] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
        { headers: { Authorization: `Bearer ${auth}` } }
      )
      .then((res) => setPlanos(res.data));
  }, []);

  return (
    <Container>
      <Text> Escolha seu Plano </Text>
      {planos?.map((plano) => {
        return (
          <Planos
            onClick={() => navigate(`/subscriptions/${plano.id}`)}
            plano={plano}
          >
            <img src={plano.image} />
            <PriceText>{plano.price}</PriceText>
          </Planos>
        );
      })}
    </Container>
  );
};

export default Subscription;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  align-items: center;
`;
const Text = styled.p`
  height: 38px;
  width: 263px;
  border-radius: undefinedpx;
  color: white;
`;

const PriceText = styled.p`
  color: #ffffff;
`;

const Planos = styled.div`
  box-sizing: border-box;
  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
`;

const Vector = styled.img`
  height: 95px;
  width: 91.8864974975586px;
  border-radius: 0px;
`;
