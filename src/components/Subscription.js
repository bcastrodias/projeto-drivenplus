import styled from "styled-components";

const Subscription = () => {
  return (
    <Container>
      <Text> Escolha seu Plano </Text>
      <Planos>
        <Vector />
      </Planos>
      <Planos>
        <Vector />
      </Planos>
      <Planos>
        <Vector />
      </Planos>
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
