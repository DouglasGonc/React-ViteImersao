import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    max-width: 1200px;
    min-height: 300px;
    border-radius: 20px;
    background-image: url(/img/banner-test.jpg);
    background-size: cover;
    background-position: center;

    .column1 {
        flex: 1;
        padding-left: 5%;
        margin: 50px 0;
    }

    .column2 {
        flex: 1;
        padding-left: 5%;
        margin: 50px 0;
    }

    h1 {
        font-size: 3vw; /* Ajusta o tamanho do texto conforme a largura da tela */
        line-height: 1.2em;
        color: #fff;
    }

    p {
        color: #fff;
        font-size: 1.5vw;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        h1 {
            font-size: 5vw;
        }

        p {
            font-size: 3vw;
        }

        .column1, .column2 {
            width: 100%;
            padding-left: 0;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 6vw;
        }

        p {
            font-size: 4vw;
        }
    }
`;

const Banner: React.FC = () => {
    return (
        <BannerContainer>
            <div className="column1">
                <h1>Choose from thousands of recipes</h1>
                <p>Appropriately integrate technically sound value with scalable infomediaries negotiate sustainable strategic theme areas</p>
            </div>
            <div className="column2"></div>
        </BannerContainer>
    );
};

export default Banner;