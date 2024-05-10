import styled from "styled-components";
import { mobile } from "../responsive";
import bg01 from "../assets/bg01.png";
import Navbar2 from "../components/Navbar2";
import "../app.css";
import { useState } from "react";

//Login Page
const loginUser = (e) => {
  e.preventDefault();
};
const Login = () => {
  return (
    <PageContainer>
      <Navbar2 />
      <Container>
        <Wrapper>
          <Title>Giriş Yap</Title>
          <Form onSubmit={loginUser}>
            <Input type="text" placeholder="Kullanıcı Adı" />
            <Input type="password" placeholder="Şifre" />
            <Button>Giriş</Button>
            <Link>Şifremi Unuttum</Link>
            <Link>Yeni Hesap Oluştur</Link>
          </Form>
        </Wrapper>
      </Container>
    </PageContainer>
  );
};

//////////
// Style //
//////////
const PageContainer = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${bg01}) center center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: var(--primary-text-color);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  border-radius: 16px;
  padding: 20px;
  background-color: var(--primary-RegLog-BG-color);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: var(--primary-Button-color);
  border-radius: 60px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export default Login;
