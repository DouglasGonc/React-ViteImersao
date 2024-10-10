import React from "react";
import styled from "styled-components";
// import SearchBar from "./search-bar";
// import SelectDropdown from "./select-dropdown";
// import RecipesItems from "./recipe-items";

const ContainerLibrary = styled.section`
    display: flex;
    margin: 60px 0;
`;

const Sidebar = styled.section`
    width: 365px;
    margin: 0 40px 0 0;

    background-color: blue;
`;

const Content = styled.section`
    width: 100%;

    background-color: red;
`;

const RecipeLibrary: React.FC = () => {
    return (
        <ContainerLibrary>
            <Sidebar>
                <h1>Sidebar</h1>
            </Sidebar>
            <Content>
                <h1>Content</h1>
            </Content>
        </ContainerLibrary>
    );
};

export default RecipeLibrary;