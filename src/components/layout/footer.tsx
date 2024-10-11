import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../assets/icons/facebook-icon';
import { InstagramIcon } from '../../assets/icons/instagram-icon';
import { XIcon } from '../../assets/icons/twitter-X-icon';
import ScreenSize from '../../assets/monitorador-screen';

const FooterContainer = styled.footer`
`;

const FooterGrid1 = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 60px 40px 41px 40px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const FooterFlex2 = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 40px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
    div{
        flex: 1 1 25%
    }

    ul{
        list-style-type: none;
        padding-left: 0;
    }
    li{
        padding-bottom: 13px;
    }

    @media (max-width: 768px){

        div{
            flex: 1 1 50%;
        }
    }
`;
const LogoF = styled.div`
    padding: 0 60px 0 0;
    color: red;
    
    img{
        width: 104px;
    }
`;
const FooterGrid3 = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 30px 40px 60px 40px;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterGrid1>
                <section>
                    <LogoF>
                        <img src="/img/Design-logo-vanda-sem-fundo.png" alt="logo" />
                    </LogoF>
                </section>
                <section style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', columnGap: '15px' }}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <XIcon />
                </section>
            </FooterGrid1>
            <FooterFlex2>
                <div>
                    <ul>
                        <li><a href="#">Presentations</a></li>
                        <li><a href="#">Professionals</a></li>
                        <li><a href="#">Stores</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Workshops</a></li>
                        <li><a href="#">Webinars</a></li>
                        <li><a href="#">Local Meetups</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Our Initiatives</a></li>
                        <li><a href="#">Giving Back</a></li>
                        <li><a href="#">Communities</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Contact Form</a></li>
                        <li><a href="#">Work With Us</a></li>
                        <li><a href="#">Visit Us</a></li>
                    </ul>
                </div>
            </FooterFlex2>
            <FooterGrid3>Made by Unbound Studio in Guatemala City.</FooterGrid3>

            <ScreenSize />
        </FooterContainer>
    );
};

export default Footer;