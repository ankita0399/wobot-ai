import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import Content from './Content';

const App = () => {
  return (
    <div>
      <Container>
        <img
          src={logo}
          alt="Company-Logo"
          className="logo"
        />
        <Background>
          <rect1 />
          <rect2 />
          <rect3 />
        </Background>
        <Content />
        <Terms>
          <h5>
            Terms of use  |  Privacy policy
          </h5>
        </Terms>
      </Container>
    </div>
  )
};

const Container = styled.div`

position: relative;
width: 100%;
height: 100%;
background: #f9f9f9;

  .logo {
    position: absolute;
    width: 160px;
    height: 36.02px;
    left: 60px;
    top: 60px;
  }
`;

const Background = styled.div`
  rect1 {
    position: absolute; 
    left: -117px;
    top: 185.5px;
    
    width: 1752px;
    height: 375px;
    
    opacity: 0.45;
    background-color: #f0f0f0;
    
    transform: rotate(-30deg);
  }

  rect2 {
    position: absolute;
    width: 60vw;
    height: 10px;
    left: -5rem;
    top: 22.7rem;
    opacity: 0.2;
    background: #3766e8;;
    transform: rotate(-30deg);
  }

  rect3 {
    position: absolute;
    width: 60vw;
    height: 10px;
    left: 50.7rem;
    top: 18.5rem;
    opacity: 0.2;
    background: #3766e8;;
    transform: rotate(-30deg);
  }
`;

const Terms = styled.div`
  h5 {
    height: 25rem;
    width: 38rem;
    
    margin: 30rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #545454;
    
    font-weight: 400;
    font-size: 14px;
    
    
  }
`;

export default App;