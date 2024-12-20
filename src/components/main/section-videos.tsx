
import React from "react";
import styled from "styled-components";
import SelectDropdown from "./select-dropdown";
import CardVideo from "./card-video";

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
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;

    margin: 30px 0 60px 0;

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        row-gap: 40px;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        width: 100%;
        height: auto;
    }
`;

const SectionVideos: React.FC = () => {
    return (
        <>
            <TitleVideo>
                <div>
                    <h2>Videos</h2>
                </div>
                <SelectDropdown />
            </TitleVideo>

            <VideoGrid>
                <CardVideo />
                <CardVideo />
                <CardVideo />
                <CardVideo />
            </VideoGrid>
        </>
    );
};

export default SectionVideos;