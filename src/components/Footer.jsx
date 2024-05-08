import { MailOutline } from "@material-ui/icons";
import DiscordLogo from "../assets/logo/discord-logo.png";
import InstagramLogo from "../assets/logo/instagram.png";
import styled from "styled-components";
import { mobile } from "../responsive";
import "../app.css";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color: var(--primary-Homebg-color);
  color: #141414;
  color: var(--primary-text-color);
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
        <Logo>
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
              background: "transparent",
              borderRadius: "15px",
              width: "40px",
              height: "40px",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",

              marginLeft: "1em",
            }}
          />
          <MailOutline
            style={{
              background: " transparent",
              borderRadius: "15px",
              width: "40px",
              height: "40px",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
              marginLeft: "1em",
            }}
          />
          <Payment
            src={InstagramLogo}
            style={{
              background: " transparent",
              borderRadius: "15px",
              width: "50px",
              height: "40px",
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
