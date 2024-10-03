import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #fff;
    color: #000;
`;

const Headerflex = styled.div`
    margin: 0 auto;
    width: 1200px;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    section{
        display: flex;
        align-items: center;
    }
`;

const LogoH = styled.div`
    padding: 0 60px 0 0;
    color: red;
    
    img{
        width: 104px;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 12px;
    color: #000;
    padding: 0 15px;

    &:hover {
        color: #007bff; /* Cor ao passar o mouse */
    }
`;

const NavButton = styled.a`
    text-decoration: none;
    margin: 45px 15px;
    font-size: 12px;
    background-color: var(--button-color-primary);
    color: #fff;
    font-weight: bold;
    
    padding: 10px 30px;
    border-radius: 30px;

    &:hover{
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Headerflex>
                <section>
                    <LogoH>
                        <img src="/img/Design-logo-vanda-sem-fundo.png" alt="logo" />
                    </LogoH>
                    <Nav>
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/about">About</StyledLink>
                        <a href="/">Search</a>
                        <a href="/about">Contato</a>
                    </Nav>
                </section>
                <section>
                    <div>
                    </div>
                    <StyledLink to="/about">Sign In</StyledLink>
                    <NavButton href="#">Sign Up</NavButton>
                </section>
            </Headerflex>
        </HeaderContainer>
    );
};

export default Header;
