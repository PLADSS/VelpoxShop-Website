import { MailOutline } from "@material-ui/icons";
import DiscordLogo from "../assets/logo/discord-logo.png";
import InstagramLogo from "../assets/logo/instagram.png";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color: #000;
  color: #dadde0;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo style={{ color: "white" }}>
          VEL<span style={{ color: "#15DB4C" }}>POX SH</span>OP
        </Logo>
        <Desc>Hız, Güven, Kalite</Desc>
      </Left>
      <Center></Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Payment
            src={DiscordLogo}
            style={{
              background: "linear-gradient(to bottom , #030712, #301991)",
              width: "3em",
              paddingLeft: "1em",
              paddingRight: "1em",
              height: "3em",
              marginLeft: "1em",
            }}
          />
          <MailOutline
            style={{
              background: " linear-gradient(to bottom , #000000, #3D9CF5)",
              width: "2em",
              height: "2em",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
              marginLeft: "1em",
            }}
          />
          <Payment
            src={InstagramLogo}
            style={{
              background: " linear-gradient(to bottom , #030712, #FE016F)",
              width: "3em",
              height: "3em",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
              marginLeft: "1em",
            }}
          />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
