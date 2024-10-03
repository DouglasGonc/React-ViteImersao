import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 70px 70px 70px;
    border-radius: 30px;
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
`;
const Button = styled.button`
    padding: 15px 30px;
    margin-left: 10px;
    border: 2px solid #ffc107;
    background-color: #ffc107;;
    border-radius: 30px;
    color: #000;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #ffb300;
    }
`;

const FormEmail: React.FC = () => {
    return (
        <FormContainer>
            <Input type="email" placeholder="Email Address" />
            <Button>Subscribe</Button>
        </FormContainer>
    );
};

export default FormEmail;