import React from 'react';
import styled from 'styled-components';

const Inputs = () => {
    return (
        <Container>
            <Form>
                <label htmlFor="Name">Company Name</label>
                <input
                    type="text"
                    placeholder='e.g. Example Inc'
                />
                <label htmlFor="Type">Industry</label>
                <select>
                    <option value="0">Select</option>
                </select>
                <label htmlFor="Size">Company Size</label>
                <div className='range'>
                    <button>1-20</button>
                    <button>21-50</button>
                    <button>51-200</button>
                    <button>201-500</button>
                    <button>500+</button>
                </div>
                <button className="Submit">Get Started</button>
            </Form>
        </Container>

    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 0px;
    width: 270px;
    Sheight: 185px;

    position: absolute;
    left: 88px;
    top: 200px;

    background: #ffffff;
    
`;

const Form = styled.form`

label {
    padding: 0px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

    input[type=text] {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 10%;
        bottom: 185px;
        padding: 10px;
        
        background: #ffffff;
        color: #a0a0a0;

        border: 1px solid #ced4da;
        border-radius: 6px;
        box-sizing: border-box;
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }

    select{
        box-sizing: border-box;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 39%;
        bottom: 114px;
        background-color: #ffffff;
        color: #a0a0a0;
        border: 1px solid #ced4a;
        border-radius: 6px;
    }

    .range{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 17px;

        font-family: 'Inter';

        position: absolute;
        width: 269px;
        height: 25px;
        left: 0;
        top: 162px;
        border-radius: 2px;
    }

    .range button:hover{
        background-color: #3766e8;
        color: #ffffff;
    }

    button{
        border: none;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
    }

    .Submit {
        display: flex;
        flex-direction: row;    
        justify-content: center;
        align-items: center;
        padding: 10px 95px;

        width: 100%;
        height: 35px;
        background: #3766e8;
        border-radius: 5px;
        

        font-family: 'Roboto';

        color: #ffffff;
    }

`;

export default Inputs;