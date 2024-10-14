import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginBar from '../main/NavSing-InUp';

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
        .secLeft {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .secReght{       
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

const Nav = styled.nav<{ open: boolean }>`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        display: ${(props) => (props.open ? 'flex' : 'none')};
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
        margin: 52px 0 52px 15px;
    }
`;

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                            <StyledLink to="/recipe">Recipe</StyledLink>
                            <StyledLink to="/sobre-nos">Search</StyledLink>
                            <StyledLink to="/contato">Contato</StyledLink>
                        </Nav>
                    </div>
                </section>
                <section className='secReght'>
                    <LoginBar />
                    <HamburgerIcon onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </HamburgerIcon>
                </section>
            </Headerflex>
        </HeaderContainer>
    );
};

export default Header;