import styled from "styled-components";
import AvertaDemoPE from "../assets/font/AvertaDemoPE-ExtraBold.otf";
import "../app.css";

const Container = styled.div`
  height: 90px;
  color: var(--primary-text-color);
  background-color: linear-gradient(to top, #fbfdfb, #f2e457);
  font-family: "AvertaDemoPE", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 60px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Shop</Container>;
};

export default Announcement;
