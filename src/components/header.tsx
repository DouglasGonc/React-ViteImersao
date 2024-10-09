import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '../icons/search-icon';

// Estilos
const HeaderContainer = styled.header`
    background-color: #fff;
    color: #000;
`;

const Headerflex = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        .secLeft{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .secReght{
            display: none;
        }
    }
`;

const LogoH = styled.div`
    padding: 0 60px 0 0;
    color: red;

    img {
        width: 104px;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        display: ${(props) => (props.open ? 'flex' : 'none')}; /* Mostra o menu se o estado open for true */
        flex-direction: column;
        position: absolute;
        top: 80px;
        right: 0;
        background-color: #fff;
        width: 200px;
        padding: 20px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 12px;
    color: #000;
    padding: 0 15px;

    &:hover {
        color: #007bff;
    }

    @media (max-width: 768px) {
        padding: 10px 0;
    }
`;

const NavButton = styled.a`
    text-decoration: none;
    margin: 45px 0px 45px 15px;
    font-size: 12px;
    background-color: var(--button-color-primary);
    color: #fff;
    font-weight: bold;
    padding: 10px 30px;
    border-radius: 30px;

    &:hover {
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;

// Estilos para o ícone do menu hamburguer
const HamburgerIcon = styled.div`
    display: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    margin: 52px 0px;

    span {
        height: 3px;
        background-color: #000;
        width: 100%;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

// Componente principal
const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Alterna entre abrir e fechar o menu
    };

    return (
        <HeaderContainer>
            <Headerflex>
                <section className='secLeft'>
                    <LogoH>
                        <h1>Logo</h1>
                    </LogoH>
                    <div>
                        <Nav open={menuOpen}>
                            <StyledLink to="/">Home</StyledLink>
                            <StyledLink to="/sobre-nos">About</StyledLink>
                            <StyledLink to="/sobre-nos">Search</StyledLink>
                            <StyledLink to="/contato">Contato</StyledLink>
                        </Nav>
                        <HamburgerIcon onClick={toggleMenu}>
                            {/* Ícone de 3 barras */}
                            <span></span>
                            <span></span>
                            <span></span>
                        </HamburgerIcon>
                    </div>
                </section>
                <section className='secReght'>
                    <div><SearchIcon size={18} color="#4a4a4a" /></div>
                    <StyledLink to="/sobre-nos">Sign In</StyledLink>
                    <NavButton href="#">Sign Up</NavButton>
                </section>
            </Headerflex>
        </HeaderContainer>
    );
};

export default Header;