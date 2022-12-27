import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../contexts/auth";
import styled from "styled-components";

const Plano = () => {
  const [plano, setPlano] = useState();
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`,
        { headers: { Authorization: `Bearer ${auth}` } }
      )
      .then((res) => setPlano(res.data));
  }, []);

  const onPressButton = () => {
    if (!name || !number || !cvv || !expiryDate) {
      return alert("Preencha as informações do cartão");
    }
    const confirmation = window.confirm(
      `Tem certeza que deseja assinar o plano ${plano.name} (R$ ${plano.price})?`
    );
    if (confirmation) {
      axios
        .post(
          "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
          {
            membershipId: id,
            cardName: name,
            cardNumber: number,
            securityNumber: cvv,
            expirationDate: expiryDate,
          },
          { headers: { Authorization: `Bearer ${auth}` } }
        )
        .then((res) => {
          localStorage.setItem(
            "membership",
            JSON.stringify(res.data.membership)
          );
          navigate("/home");
        });
    }
  };

  if (!plano) {
    return null;
  }

  return (
    <Container>
      <Voltar
        onClick={() => navigate("/subscriptions")}
        src={"/assets/Vector.png"}
      />
      <img src={plano.image} />
      {plano.name}
      Beneficios
      {plano.perks.map((perk) => perk.title)}
      Preço
      {plano.price}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome impresso no cartão"
      ></Input>
      <Input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Digitos do cartão"
        type="number"
      ></Input>
      <SmallInput
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="Código de segurança"
        type="email"
      ></SmallInput>
      <SmallInput
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        placeholder="Validade"
      ></SmallInput>
      <Button onClick={onPressButton}> ASSINAR </Button>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Input = styled.input`
  height: 52px;
  width: 299px;
  border-radius: 8px;
  padding-bottom: 5px;
`;

const Voltar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const SmallInput = styled.input`
  height: 52px;
  width: 144px;
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

export default Plano;
