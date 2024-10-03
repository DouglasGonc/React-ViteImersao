import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Error404 = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    h1{
        font-size: 60px;
    }
`;

const ErrorPage: React.FC = () => {
    return (
        <>
            <Header />

            <Error404>
                <h1>Erro 404!</h1>
            </Error404>

            <Footer />
        </>
    );
};

export default ErrorPage;