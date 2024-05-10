import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar2 from "../components/Navbar2";
import bg02 from "../assets/bg02.png";
import { useState } from "react";

//
// Register Page
//

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
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
            />
            <Input type="email" placeholder="email" value={data.email} />
            <div>
              <Input
                type="password"
                placeholder="Şifre"
                value={data.password}
              />
              <Input
                style={{ marginRight: 0 }}
                placeholder="Şifreyi Tekrar Gir"
              />
            </div>

            <Agreement>
              Kişisel verilerimin <b>GİZLİLİK POLİTİKASI</b>'na uygun olarak
              işlenmesine onay veriyorum
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
export default Register;
