import styled from "styled-components";
import Cover from '../Assets/Carousel.png';
import { motion } from "framer-motion";

                

export const CustomerCard = styled(motion.div)`
  margin-top: 10%;
  margin-left:4%;
  width: 1240px;
  height: 724px;
  flex-shrink: 0;
  min-height: 26.6rem;
  border-radius: 45px;
  background: var(--Dark, #191A23);
  padding-top: 4rem;
  h1 {
    margin-left: 20%;
   color: rgba(255, 255, 255, 0.70);
  font-family: 'Koulen', sans-serif;
  font-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 89.25px; /* 111.563% */
  letter-spacing: -0.997px;
  }
  .line {
    width: 56px;
    height: 2px;
    background-color: #fff;
    margin: 0 auto 1.5rem;
  }

  @media screen and (max-width: 875px) {
    padding-bottom: 4rem;
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
     margin-left: 10%;
     margin-top: -5%;
    padding-bottom: 4rem;
    h1 {
      font-size: 2rem;
      line-height: 3rem;
    }
    display: flex;
    width: 329px;
    height:466px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 70%;
  margin: 0 auto;
  .image-section {
    width: 11.5rem;
    text-align: center;
    .customer-image {
      margin-left: 1.5rem;
      width: 8.8rem;
      height: 8.8rem;
      overflow: hidden;
      border: 3px solid #fff;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
        color: #00E0F2;
        font-family: Koulen;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    p {
      font-weight: 400;
      font-size: 1.1rem;
    }
  }

  .text-section {
    background-size: cover;
    background-position: center;
  background-repeat: no-repeat;
    background-image: url('${Cover}');
    background-repeat: no-repeat;
    height: 350.952px;
    width: 75rem;
    p {
      font-weight: 400;
      font-size: 30px;
      line-height: 50px;
      padding-top: 1px;
      padding-left: 30px;
      color: #FFF;
      font-family: 'Gabarito', sans-serif;
      font-style: normal;
    }
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    gap: 1rem;

    .text-section {
      width: 100%;
      text-align: center;
    }
    p {
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
      padding-top: 10%;
      color: #FFF;
      font-family: 'Gabarito', sans-serif;      
      font-style: normal;
    }
  }

   @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5px;

    .text-section {
      text-align: center;
      width: 276px;
      height:200px;
       p {
        width: 200px;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      padding-top: 1px;
    }
    }
    
  }
`;

export const CarouselNav = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  svg {
    cursor: pointer;
    color: #fcb72b;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 875px) {
    display: none;
  }
   @media screen and (max-width: 768px) {
    display: none;
  }
`;
