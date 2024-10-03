import React from 'react';
import styled from 'styled-components';
import FormEmail from './email-form'

const FormContainer = styled.section`

    background-color: var(--button-color-primary);
    border-radius: 30px;

    div{
        max-width: 900px;
        margin: 0 auto;
    }
    h2{
        padding: 70px 70px 30px 70px;
        color: #fff;
        font-size: 28px;
        font-weight: 600;
        line-height: 39.2px;
        text-align: center;
    }
`;


const Newsletter: React.FC = () => {
    return (
        <FormContainer>
          <div>
            <h2>Be the first to know about the latest deals, receive new trending recipes & more!</h2>
            <FormEmail/>
          </div>
        </FormContainer>
    );
};

export default Newsletter;