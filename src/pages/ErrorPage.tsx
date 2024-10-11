import React from 'react';
import styled from 'styled-components';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Link } from 'react-router-dom';

const Error404 = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;

    .container {
        max-width: 600px;
        padding: 40px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    h1 {
        font-size: 6em;
        font-weight: bold;
        margin-bottom: 20px;
        color: var(--button-color-primary);
    }

    h2 {
        font-size: 2em;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 30px;
    }

    .logo {
        margin: 30px 0;
    }
    .accent-shadow {
        text-shadow: 2px 2px 8px rgba(27, 2, 2, 0.8);
    }
`;
const StyledaLink = styled(Link)`
    display: inline-block;
    padding: 15px 30px;
    font-size: 1.2em;
    background-color: var(--button-color-primary);
    color: #fff;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;

const ErrorPage: React.FC = () => {
    return (
        <>
            <Header />

            <Error404>
            <div className="container">
                <h1 className="accent-shadow">404</h1>
                <h2>Oops! Página Não Encontrada</h2>
                <p>Parece que a página que você está procurando não existe.</p>
                
                <StyledaLink to="/">Voltar à Home</StyledaLink>
            </div>
            </Error404>

            <Footer />
        </>
    );
};

export default ErrorPage;