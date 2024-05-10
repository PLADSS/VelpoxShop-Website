import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import AvertaDemoPE from "../assets/font/AvertaDemoPE-ExtraBold.otf";
import moon from "../assets/logo/moon.png";
import sun from "../assets/logo/sun.png";
import "../app.css";

const Navbar2 = () => {
  const handleDarkModeToggle = () => {
    const body = document.body;
    const MoonButton = document.getElementById("moon");

    // Dark theme kontrolü
    const isDarkTheme = body.classList.contains("dark-theme");

    // Dark theme varsa kaldır, yoksa ekle
    if (isDarkTheme) {
      body.classList.remove("dark-theme");
      MoonButton.src = moon;
    } else {
      body.classList.add("dark-theme");
      MoonButton.src = sun;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>TR</Language>
        </Left>
        <Center>
          <Logo style={{ fontFamily: AvertaDemoPE }}>
            VEL<span style={{ color: "#15DB4C" }}>POX SH</span>OP
          </Logo>
        </Center>
        <Right style={{ color: "#141414" }}>
          <Moon
            id="moon"
            onClick={handleDarkModeToggle}
            src={moon}
            alt="Moon Logo"
          />
        </Right>
      </Wrapper>
    </Container>
  );
};
//////////
// Style //
//////////
const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: var(--primary-text-color);
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  color: var(--primary-text-color);
  font-family: "AvertaDemoPE", sans-serif;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Moon = styled.img`
  margin-right: 20px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export default Navbar2;
