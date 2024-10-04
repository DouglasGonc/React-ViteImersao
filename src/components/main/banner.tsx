import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
    display: flex;
    height: 439px;
    width: 1200px;
    
    border-radius: 20px;
    background-image: url(/img/banner-test.jpg);
    background-size: cover;

    .column1 {
        width: 510px;
        padding-left: 70px;
        margin: 70px 0;
    }

    .column2 {
        width: 580px;
        padding-left: 70px;
        margin: 70px 0;
    }

    h1 {
        font-size: 52px;
        line-height: 62.4px;
        color: #fff;
    }

    p {
        color: #fff;
        font-size: 18px;
        margin-top: 20px;
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