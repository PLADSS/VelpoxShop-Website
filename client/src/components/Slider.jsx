import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import "../app.css";

const Slider = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const slideIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick("right");
    }, 5000); // 5 sn

    return () => clearInterval(interval);
  }, []);

  const scrollToPosition = () => {
    window.scrollTo({
      top: window.scrollY + 700,
      behavior: "smooth",
    });
  };

  const handleClick = (direction) => {
    const width = window.innerWidth;
    if (direction === "left") {
      slideIndex.current = slideIndex.current > 0 ? slideIndex.current - 1 : 2;
      setTranslateValue(-slideIndex.current * width);
    } else {
      slideIndex.current = slideIndex.current < 2 ? slideIndex.current + 1 : 0;
      setTranslateValue(-slideIndex.current * width);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper translateValue={translateValue}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image style={{ width: "700px" }} src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={scrollToPosition}>Ürünleri Gör</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
//////////
// Style //
//////////
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: var(--primary-Sliderbg-color);
  overflow: hidden;
  ${mobile({ display: "none" })}
  justify-content: space-between; /* Align arrows to the left and right edges */
  align-items: center; /* Center vertically */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--primary-Button-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.translateValue}px);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--primary-text-color);
`;

const ImgContainer = styled.div`
  height: 70%;
  flex: 1;
  background-color: var(--primary-BG-color);
  border-radius: 100px;
  box-shadow: 4px 0px 2px 0px rgba(64, 81, 59, 0.5);
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: var(--primary-Button-color);
  box-shadow: 2px 0px 2px 0px rgba(64, 81, 59, 0.5);
  color: #060907;
  cursor: pointer;
  border-radius: 15px;
  border-color: #faf1e6;
  &:hover {
    background: #8db7dc;
    border-color: #2c6292;
  }
`;
export default Slider;
