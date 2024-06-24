import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
  display : flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 40px 10px 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px; 

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    background-color: ${props => (props.isOpen ? '#404853' : '#4bbff8')};
    flex-wrap: wrap;
   align-items: flex-start;
    ${props =>
      props.isOpen &&
      `
      position: fixed; 
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    `}
  }
`
const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 100%;
  color: #ffffff;
  align-items: center;
  border: none;
  @media (max-width: 768px) {
    height: 90%;
    width: 30%;   
   }
`
const Logo = styled.img`
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;   
   }
`
 const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 35%;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    width: 100%;
    flex-direction: column; 
    margin-top: 10px; 
    text-align: start;
    position: relative;
    bottom: 38vh;
  }
`
const StyledLink =styled(Link)`
  border-radius: 30px;
  border: 2px solid #ffffff;
  width:40%;
  text-decoration: none;
  padding:7px;
  margin:5px 6px;
  color: #ffffff;
  transition: color 0.3s ease;
  
  &:hover {
    color: #46b7f5;
    border: 2px solid #46b7f5;
  }
  @media (max-width: 768px) {
    width: 92%;
    padding:15px;
    border-bottom: none;
    border-top:none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    &:hover {
      color: #ffffff; 
      border-bottom: none;
    border-top:none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    }
    &:nth-of-type(1) {
      @media (max-width: 768px) {
        border-bottom: 1px solid #5d636b90;
      }
  }
`

const OpenMenu = styled.div`
  width:50%;
  height:50%;

  

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 7%;
    flex-direction: row; 
    margin: 0; 
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => (props.isOpen ?  '1px solid #5d636b90' : 'none' )
  };

`

const Hamburger = styled.div`
  display: none; 
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; 
    
  }
`
const HamburgerBars = styled.div`
  width: 20px;
  height: 2px;
  background-color: #ffffff; 
  margin: 7px 0;
  transition: transform 0.3s ease;

  ${props => props.isOpen && `
  &:nth-of-type(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  &:nth-of-type(2) {
    opacity: 0;
  }
  &:nth-of-type(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`}
` 
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () =>{
   setIsOpen(!isOpen);
  };

  return (
    <StyledNav isOpen={isOpen}>
      <OpenMenu isOpen={isOpen}>
      <LogoContainer to="/">
        <Logo src='src/assets/T6_Logo.svg'/>
      </LogoContainer>
      <Hamburger onClick={toggleNav}>
        <HamburgerBars isOpen={isOpen}/>
        <HamburgerBars isOpen={isOpen}/>
        <HamburgerBars isOpen={isOpen}/>
      </Hamburger>
      </OpenMenu>
      <NavItems isOpen={isOpen}>
        <StyledLink to="/contact">Contact Us</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </NavItems>
      
    </StyledNav>
  )
}

export default Nav