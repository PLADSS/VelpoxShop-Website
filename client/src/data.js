import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import image7 from './assets/7.png';
import image8 from './assets/8.png';
import image9 from './assets/9.png';
import discordNitro from "./assets/discord-nitro.png";
import discordSunucu from "./assets/discordSunucu.png";
import discordMenu from "./assets/discordMenu.png"; 
import styled from "styled-components";

const DiscordBlue = styled.span`
  color: #669ed1;
`;
const Title = styled.div``;

export const sliderItems = [
    {
      id: 1,
      img: discordSunucu,
      title: (
        <Title>
          Binlerce Kişilik{' '}
          <DiscordBlue>Discord</DiscordBlue> Sunucuları
        </Title>
      ),
      desc: "Binlerce gerçek insandan oluşan, discord sunucularından birine sahip olun ",
      bg: "fcf1ed",
    },
    {
      id: 2,
      img: discordNitro,
      title: "Discord Nitro",
      desc: "Discord Nitro satışımız ile çok ucuza sunucunuzu takviye edin yahut kendiniz kullanın",
      bg: "fbf0f4",
    },
    {
      id: 3,
      img: discordNitro,
      title: "Discord Nitro",
      desc: "Discord Nitro ile ister Sunucunuzu Boostlayın ister Nitro avantajlarından yararlanın",
      bg: "fbf0f4",
      img: discordMenu,
      title: "Güvenli Alışveriş",
      desc: "Sipariş Sonrası Takip , Güvenli Ödeme , Hızlı Teslim",
      bg: "f5fafd",
    },
  ];

  export const popularProducts = [
    {
      id:1,
      img: image1,
    },
    {
      id:2,
      img:image2,
    },
    {
      id:3,
      img:image3,
    },
    {
      id:4,
      img:image4,
    },
    {
      id:5,
      img:image5,
    },
    {
      id:6,
      img:image6,
    },
    {
      id:7,
      img:image7,
    },
    {
      id:8,
      img:image8,
    },
    {
      id:9,
      img:image9,
    },
  ]