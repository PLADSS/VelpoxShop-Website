import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import "../app.css";

const Newsletter = () => {
  return (
    <Container>
      <Title>Bize Ulaşın</Title>
      <Desc>Soru ve Görüşleriniz için bize ulaşabilirsiniz</Desc>
      <InputContainer>
        <Input placeholder=" Email" />
        <Button href="mailto:velpoxshop@gmail.com" target="_blank">
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
//////////
// Style //
//////////
const Container = styled.div`
  height: 60vh;
  color: var(--primary-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: var(--primary-Button-color);
  color: white;
`;
export default Newsletter;
