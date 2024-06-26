import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import bg01 from "../assets/bg01.png";
import Navbar2 from "../components/Navbar2";
import "../app.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  //Login Page
  const loginUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post("/login", {
        username,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        // Girdikten sonra sıfırla
        setData({ username: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      // Hata ayıkla
      console.error("Bağlanırken hata:", error);
      toast.error("Bir hata oluştu.");
    }
  };

  return (
    <PageContainer>
      <Navbar2 />
      <Container>
        <Wrapper>
          <Title>Giriş Yap</Title>
          <Form onSubmit={loginUser}>
            <Input
              type="text"
              placeholder="Kullanıcı Adı"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Şifre"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Button>Giriş</Button>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Newaccount>Yeni Hesap Oluştur</Newaccount>
            </Link>
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

const Newaccount = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;
export default Login;
