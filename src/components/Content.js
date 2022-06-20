import React from 'react';
import styled from 'styled-components';
import logo1 from "../assets/logo1.png";
import Inputs from './Inputs';

const Content = () => {
    return (
        <Container>
            <Header>
                <img
                    src={logo1}
                    alt="Company-Logo"
                    className="logo1"
                />
                <h3>It’s a delight to have you <br /> onboard</h3>
                <p> Help us know you better.
                    <br />
                    (This is how we optimize Wobot as per your business needs)
                </p>
            </Header>
            <Inputs />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 550px;
    top: 110px;

    background-color: #ffffff;
    box-shadow: 4px 4px 20px rgba(157, 157, 157, 0.12);
    border-radius: 15px;

    width: 450px;
    height: 480px;
`;

const Header = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
    gap: 16px;

    width: 378px;
    height: 185px;

    .logo1 {
        width: 35px;
        height: 33px;

        position: absolute;
        top: 48px;
        left: 205px;
    }

    h3 {
        position: absolute;
        top: 95px;
        left: 115px;
        text-align: center;
        color: #212121;
        font-weight: 500;
        font-style: normal;
        font-size: 20px;
        padding: 0rem;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        text-align: center;
        position: absolute;
        top: 10rem;
        left: 5.5rem;
    }
`;


export default Content;