import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScreenSizeContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 1000;
`;

const ScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return (
        <ScreenSizeContainer>
            Largura: {screenSize.width}px <br />
            Altura: {screenSize.height}px
        </ScreenSizeContainer>
    );
};

export default ScreenSize;