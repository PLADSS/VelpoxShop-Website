import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import AvertaDemoPE from "../assets/font/AvertaDemoPE-ExtraBold.otf";
import moon from "../assets/logo/moon.png";
import sun from "../assets/logo/sun.png";
import "../app.css";

const Navbar = () => {
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
          <SearchContainer style={{ background: "white" }}>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <Moon
            id="moon"
            onClick={handleDarkModeToggle}
            src={moon}
            alt="Moon Logo"
          />
        </Left>
        <Center>
          <Logo style={{ fontFamily: AvertaDemoPE }}>
            VEL<span style={{ color: "#15DB4C" }}>POX SH</span>OP
          </Logo>
        </Center>
        <Right style={{ color: "#141414" }}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem>Kayıt Ol</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>Giriş Yap</MenuItem>
          </Link>

          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
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
  background-color: var(--primary-Homebg-color);
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

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
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

const MenuItem = styled.div`
  font-size: 14px;
  color: var(--primary-text-color);
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Moon = styled.img`
  margin-left: 25px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export default Navbar;
