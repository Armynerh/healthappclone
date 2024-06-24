import styled from '@emotion/styled';
import Overlay from './Overlay'; 
import Nav from './Nav';


const TextContainer= styled.div`
color:#ffffff;
display: flex;

justify-content:flex-start;
align-items: start;
margin-left: 190px;
line-height:1.2;
box-sizing: border-box;
@media (max-width: 768px) {
  justify-content:center;
 border:1px solid black;
 margin: 70px 30px 0 30px;
}
`
const OverlayText =styled.h4`
font-family: "Roboto", sans-serif;
font-size:50px;
font-weight: 300;
width: 55%;
@media (max-width: 768px) {
  font-size: 21px;
  text-align: center;
  width: 100%;

  
}
`
const LandingFooter = styled.div`
display:flex;
background-color: #4BBFF8;
color:#ffffff;


  

`

const Landing = () => {
  return (
  <div>
     <Overlay>
      <Nav/>
      <TextContainer>
    <OverlayText>Transforming clinical data into actionable insights for emergency and trauma teams’ most complex patients.</OverlayText>
      </TextContainer>
    </Overlay>
    <LandingFooter>Transforming clinical data into actionable insights</LandingFooter>

  </div>
   
    
  );
};

export default Landing;