import React from "react";
import styled from "styled-components";
import PlayIcon from "../../assets/icons/play-icon";

const Card = styled.a`
    position: relative;
    background-color: #fff;
    overflow: hidden;

    background-color: gray;
    border: none;
    border-radius: 20px;
`;

const ThumbCard = styled.div`
    position: relative;
    width: 100%;
    height: 360px;
    background-color: #ccc;

    img{
        border-radius: 20px 20px 0px 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }
    .play-button{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
`;

const CardContent = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    color: white;

    padding: 15px;
    line-height: 1.4;

    .title{
        margin: 0 0 10px 0;
        font-size: 17px;
        font-weight: bold;
        unicode-bidi: isolate;
    }
    .author{
        font-size: 12px;
    }
`;

const CardVideo: React.FC = () => {
    return (
        <Card href="#">
            <ThumbCard>
                <img src="https://via.placeholder.com/300x400" alt="Video Thumbnail"/>
                <button className="play-button"><PlayIcon /></button>

            </ThumbCard>
            <CardContent>
                <p className="title">Business Presentation Course</p>
                <p className="author">by Thomas Haller</p>
            </CardContent>
        </Card>
    );
};

export default CardVideo;
