import styled from 'styled-components';
import InputSearch from './input-search';
import ButtonGlobal from '../common/button-global';

const ContLogin = styled.div`
    margin: 45px 0px 45px 15px;
    display: flex;
    align-items: center;
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
                <ButtonGlobal text="Sign Up" toOrHref="/" fontSize="12px"/>
            </ContLogin>
    );
};

export default LoginBar;