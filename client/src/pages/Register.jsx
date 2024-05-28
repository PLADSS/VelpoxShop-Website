import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import bg02 from "../assets/bg02.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//
// Register Page
//

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Hesap Oluşturuldu");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }

    // Kayıt işlemi burada gerçekleştirilebilir
  };

  return (
    <PageContainer>
      <Navbar2 />
      <Container>
        <Wrapper>
          <Title>Hesap Oluştur</Title>
          <Form onSubmit={registerUser}>
            <Input
              type="text"
              placeholder="Kullanıcı Adı"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <Input
              type="email"
              placeholder="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <div>
              <Input
                type="password"
                placeholder="Şifre"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <Input
                type="password"
                placeholder="Şifre Tekrar"
                value={data.confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />
            </div>

            <Agreement>
              Kişisel verilerimin{" "}
              <Link to="/secret-policy" style={{ textDecoration: "none" }}>
                <b>
                  <SecretPolicy>GİZLİLİK POLİTİKASI</SecretPolicy>
                </b>
              </Link>
              'na uygun olarak işlenmesine onay veriyorum
            </Agreement>
            <Button type="submit">Oluştur</Button>
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
    url(${bg02}) center center;
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
  width: 40%;
  padding: 20px;
  border-radius: 16px;
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
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: var(--primary-Button-color);
  color: white;
  cursor: pointer;
`;
const SecretPolicy = styled.a`
  margin-left: 5px;
  font-weight: 600;
  cursor: pointer;
`;
export default Register;
