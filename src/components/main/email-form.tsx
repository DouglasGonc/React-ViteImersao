import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 70px 70px 70px;
    border-radius: 30px;

    @media (max-width: 768px) {
        padding: 0 20px 50px 20px;
    }

    @media (max-width: 480px) {
        padding: 0 10px 40px 10px;
    }
`;

const Input = styled.input`
    flex: 1;
    padding: 15px 20px;
    border: 2px solid #fff;
    border-radius: 30px;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
    outline: none;

    ::placeholder {
        color: #fff!important;
    }

    @media (max-width: 768px) {
        width: 80%;
        margin-bottom: 0px;
        border-radius: 30px 0 0 30px;
    }
`;

const Button = styled.button`
    padding: 15px 30px;
    margin-left: 10px;
    border: 2px solid #ffc107;
    background-color: #ffc107;
    border-radius: 30px;
    color: #000;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #ffb300;
    }

    @media (max-width: 768px) {
        width: 25%;
        margin-left: 0;

        border-radius: 0 30px 30px 0;
        padding: 15px 2px;
    }
    @media (max-width: 410px) {
        background-color: green;
    }
`;

const FormEmail: React.FC = () => {
    return (
        <FormContainer>
            <Input type="email" placeholder="Email Address" />
            <Button>Enviar</Button>
        </FormContainer>
    );
};

export default FormEmail;