import styled from 'styled-components';
import InputSearch from './input-search';

const ContLogin = styled.div`
    margin: 45px 0px 45px 15px;
    display: flex;
    align-items: center;
`;

const NavButton = styled.a`
    text-decoration: none;
    margin: 0 0 0 15px;
    font-size: 12px;
    background-color: var(--button-color-primary);
    border: 1px solid var(--button-color-primary);
    color: #fff;
    font-weight: bold;
    padding: 8px 30px;
    border-radius: 30px;

    &:hover {
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;
const StyledA = styled.a`
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

const LoginBar = () => {
    return (
            <ContLogin>
                <InputSearch/>
                <StyledA href='#'>Sign In</StyledA>
                <NavButton href="#">Sign Up</NavButton>
            </ContLogin>
    );
};

export default LoginBar;