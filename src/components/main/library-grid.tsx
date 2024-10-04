import React from "react";
import styled from "styled-components";

const ContainerLibrery = styled.div`
    margin: 40px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;

    background-color: red;
`;

const LibraryGrid: React.FC = () => {
    return (
        <ContainerLibrery>
            <h2>oi</h2><h2>oi</h2><h2>oi</h2><h2>oi</h2><h2>oi</h2><h2>oi</h2><h2>oi</h2><h2>oi</h2>
        </ContainerLibrery>
    );
};

export default LibraryGrid;