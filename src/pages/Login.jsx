import styled from "styled-components";
import { mobile } from "../responsive";
import bg01 from "../assets/bg01.png";
import "../app.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: var(--primary-text-color);
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${bg01}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  border-radius: 16px;
  padding: 20px;
  background-color: var(--primary-Homebg-color);
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

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Giriş Yap</Title>
        <Form>
          <Input placeholder="Kullanıcı Adı" />
          <Input placeholder="Şifre" />
          <Button>Giriş</Button>
          <Link>Şifremi Unuttum</Link>
          <Link>Yeni Hesap Oluştur</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
