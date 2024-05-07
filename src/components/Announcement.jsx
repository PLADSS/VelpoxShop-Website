import styled from "styled-components";

const Container = styled.div`
  height: 90px;
  color: #141414;
  background-color: #42b078;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: bold;
  font-size: 70px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Shop</Container>;
};

export default Announcement;
