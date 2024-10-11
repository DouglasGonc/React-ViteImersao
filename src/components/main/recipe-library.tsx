import React from "react";
import styled from "styled-components";
// import SearchBar from "./search-bar";
// import SelectDropdown from "./select-dropdown";
import RecipesItems from "./recipe-items";

const ContainerLibrary = styled.section`
    display: flex;
    margin: 60px 0;

    @media (max-width: 959px) {
        flex-direction: column;
        row-gap: 40px;


    }
`;

const Sidebar = styled.div`
    width: 365px;
    margin: 0 40px 0 0;

    background-color: blue;

    @media (max-width: 959px) {
        width: 100%;

    }
`;

const Content = styled.div`
    width: 100%;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;

    @media (max-width: 959px) {
        gap: 30px;
    }
    @media (max-width: 639px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;

        div{
            margin: 0 auto;
            width: 100%;
        }
    }
`;

const RecipeLibrary: React.FC = () => {
    return (
        <ContainerLibrary>
            <Sidebar>
                <h1>Sidebar</h1>
            </Sidebar>
            <Content>
                <ContentGrid>
                    <RecipesItems />
                    <RecipesItems />
                    <RecipesItems />
                </ContentGrid>
            </Content>
        </ContainerLibrary>
    );
};

export default RecipeLibrary;