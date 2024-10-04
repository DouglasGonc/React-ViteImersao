import React from 'react';
import Banner from '../components/main/banner';
import Newsletter from '../components/main/input-newslatter';
import styled from 'styled-components';
import SelectDropdown from '../components/main/select-dropdown';
import Card from '../components/main/card-video';

const TitleVideo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        font-size: 28px;
        font-weight: bold;
    }
`;

const VideoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 40px;

    margin: 30px 0 60px 0;
`;

const Home: React.FC = () => {
    return (
        <>
            <Banner />

            <TitleVideo>
                <div>
                    <h2>Videos</h2>
                </div>
                <SelectDropdown />
            </TitleVideo>

            <VideoGrid>
                <Card />
                <Card />
                <Card />
                <Card />
            </VideoGrid>

            <Newsletter />
        </>
    );
};

export default Home;