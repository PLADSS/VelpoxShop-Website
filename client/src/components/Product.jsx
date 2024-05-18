import { ShoppingCartOutlined, Title } from "@material-ui/icons";
import styled from "styled-components";
import "../app.css";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
      </Circle>
      <Info>
        <Script>{item.title}</Script>
        <Icon href="https://discord.gg/JwvjJdjX" target="_blank">
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
//////////
// Style //
//////////
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  margin-bottom: 20px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-BG-color);
  box-shadow: 4px 0px 2px 0px rgba(64, 81, 59, 0.5);
  border-radius: 50px;
  position: relative;
  flex-direction: column;

  &:hover ${Info} {
    opacity: 1;
    border-radius: 45px;
  }
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover; /* Cover the entire container with the image */
  background-position: center; /* Center the image */
`;
const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Script = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #fbfdfb;
  text-align: center;
`;

export default Product;
