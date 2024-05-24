import styled from "styled-components";
import AvertaDemoPE from "../assets/font/AvertaDemoPE-ExtraBold.otf";
import "../app.css";

const Container = styled.div`
  height: 25px;
  color: var(--secondary-text-color);
  background-color: var(--primary-Button-color);
  font-family: "AvertaDemoPE", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Bitcoin ile alımlarda %20 indirim</Container>;
};

export default Announcement;
