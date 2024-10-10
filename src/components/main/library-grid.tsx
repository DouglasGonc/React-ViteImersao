import React from "react";
import styled from "styled-components";
import RecipesItems from "./recipe-items";

const ContainerLibrery = styled.div`
    margin: 40px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
`;

const LibraryGrid: React.FC = () => {
    return (
        <ContainerLibrery>
            <RecipesItems />
        </ContainerLibrery>
    );
};

export default LibraryGrid;