import styled from "styled-components";


const Body = styled.body`
width: 100%;
height: 100%;
background: #0C0D1B;
overflow: hidden;

@media screen and (max-width: 768px) {
width: 100%;
height: 100%;
  }
`

export const Nav = styled.nav`
width: 1203px;
height: 86px;
border-radius: 54px;
background: #000;



@media screen and (max-width: 768px){
  width: 356px;
height: 46px;
margin-left: -15%;
align-items: center;
gap: 15px;
border-radius: 54px;
background: #000;

}
`

export const Hero = styled.div`
width: 100%;
padding:  80px 0px 60px;

@media screen and (max-width: 768px){
  width: 100%;
  margin-top: -150px;
  align-items: center;
  gap: 10px;
}
`

export const Break = styled.div`
width: 1000px;
height: 1px;
background: #746B63;
margin: 15% 0% 0% 12%;
z-index: 4;
@media screen and (max-width: 768px){
  width: 326px;
  height: 1px;
margin-left: 10%;
align-items: center;
}
`
export const Header = styled.div`
color: #FFF;
text-align: center;
font-family: 'Koulen', sans-serif;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 80px */
text-transform: uppercase;

@media screen and (max-width: 768px){
width: 270px;
margin-left: 20%;
align-items: center;
font-size: 60px;

}
`
export const Subheader = styled.div`
 background: -webkit-linear-gradient(#FFBF6900, #FFBF69);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
text-align: center;
font-family: 'Koulen', sans-serif;
font-size: 128px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 128px */
text-transform: uppercase;
margin-top: -40px;

@media screen and (max-width: 768px){
  width: 426px;
margin-left: -0.5%;
align-items: center;
font-size: 70px;

}
`
export const Section = styled.div`
margin-top: 12%;
margin-left: -20%;
width: 100%;
height: 579px;
flex-shrink: 0;

@media screen and (max-width: 768px){
  width: 100%;
align-items: center;
gap: 154px;
margin-top: -15%;
}
`
export default Body
