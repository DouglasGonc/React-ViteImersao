import React from "react";
import styled from "styled-components";
import SearchBar from "./search-bar";
import SelectDropdown from "./select-dropdown";
import LibraryGrid from "./library-grid";

const ContainerGrid = styled.div`
    padding: 60px 0;
    display: grid;
    grid-template-columns: 270px auto;
    column-gap: 40px;

    div{
    }
`;

const NavLibrary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RecipeLibrary: React.FC = () => {
    return (
        <>
        
        <ContainerGrid>
            <div>

            </div>
            <div>
                <NavLibrary>
                    <SearchBar /> 
                    <SelectDropdown />
                </NavLibrary>
                < LibraryGrid />
            </div>
        </ContainerGrid>
        
        </>
    );
};

export default RecipeLibrary;