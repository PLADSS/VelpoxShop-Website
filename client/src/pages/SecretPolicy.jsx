import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import cakir from "../assets/cakir.jpeg";

const SecretPolicy = () => {
  return (
    <PageContainer>
      <Container>
        <Wrapper>
          <Title>Bizde yanlış Olmaz</Title>
          <Image src={cakir} alt="Çakır" />
        </Wrapper>
      </Container>
    </PageContainer>
  );
};

//Style
const PageContainer = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    center center;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: var(--primary-text-color);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  padding: 20px;
  border-radius: 16px;
  background-color: gray;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 300;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
`;

export default SecretPolicy;
