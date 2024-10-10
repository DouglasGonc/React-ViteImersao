import React from 'react';
import styled from 'styled-components';
import FormEmail from './email-form';

const FormContainer = styled.section`
    background-color: var(--button-color-primary);
    border-radius: 20px;
    padding-bottom: 70px;

    div {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 20px;
    }

    h2 {
        padding: 70px 70px 30px 70px;
        color: #fff;
        font-size: 28px;
        font-weight: 600;
        line-height: 39.2px;
        text-align: center;

        @media (max-width: 768px) {
            padding: 50px 20px 20px 20px;
            font-size: 24px;
            line-height: 34px;
        }

        @media (max-width: 480px) {
            padding: 40px 15px 15px 15px;
            font-size: 20px;
            line-height: 30px;
        }
    }
`;

const Newsletter: React.FC = () => {
    return (
        <FormContainer>
          <div>
            <h2>Be the first to know about the latest deals, receive new trending recipes & more!</h2>
            <FormEmail />
          </div>
        </FormContainer>
    );
};

export default Newsletter;