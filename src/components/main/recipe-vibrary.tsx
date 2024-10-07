import React from "react";
import styled from "styled-components";
import SearchBar from "./search-bar";
import SelectDropdown from "./select-dropdown";
import LibraryGrid from "./library-grid";

const ContainerGrid = styled.div`
    /* padding: 60px 0;
    display: grid;
    grid-template-columns: 270px auto;
    column-gap: 40px;

    div{
    } */

    padding: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    text-align: center;

    .item1{
        background-color: #6969f0;
        border-radius: 30px;
        grid-area: 1 / 1 / 6 / 2;
    }
    .item2{
        background-color: #fad818;
        border-radius: 30px;
        grid-area: 1 / 2 / 1 / 5;
    }
    .item8{
        background-color: red;
        border-radius: 30px;
    }
    .itemFim{
        background-color: #c8c8fd;
        border-radius: 30px;
        grid-area: 6 / 2 / 6 / 5;
    }
`;

const ContainerFlex = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 60px 0;
    gap: 40px;

    .itemLeft{
        background-color: #6969f0;
        border-radius: 30px;
        flex: 1;
        text-align: center;
    }
    .itemRight{
        border-radius: 30px;
        flex: 3
    }
    .itemMenu{
        background-color: #fad818;
        border-radius: 30px;
        margin-bottom: 40px;
        text-align: center;
    }
    .itemGrid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
    }
    .item8{
        background-color: red;
        border-radius: 30px;
        text-align: center;
    }
`;

// const NavLibrary = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

const RecipeLibrary: React.FC = () => {
    return (
        <>
        
        <ContainerGrid>
            <div className="item1"><h1>Item Left</h1></div>
            <div className="item2"><h1>Item Menu</h1></div>
            <div className="item8"><h1>Item 1</h1></div>
            <div className="item8"><h1>Item 2</h1></div>
            <div className="item8"><h1>Item 3</h1></div>
            <div className="item8"><h1>Item 4</h1></div>
            <div className="item8"><h1>Item 5</h1></div>
            <div className="item8"><h1>Item 6</h1></div>
            <div className="item8"><h1>Item 7</h1></div>
            <div className="item8"><h1>Item 8</h1></div>
            <div className="item8"><h1>Item 9</h1></div>
            <div className="item8"><h1>Item 10</h1></div>
            <div className="item8"><h1>Item 11</h1></div>
            <div className="item8"><h1>Item 12</h1></div>
                {/* <NavLibrary>
                    <SearchBar /> 
                    <SelectDropdown />
                </NavLibrary>

                < LibraryGrid /> */}
        </ContainerGrid>
        
        <ContainerFlex>
            <div className="itemLeft"><h1>Item Left</h1></div>
            <div className="itemRight">
                <div className="itemMenu"><h1>Item Menu</h1></div>
                <div className="itemGrid">
                    <div className="item8"><h1>Item 1</h1></div>
                    <div className="item8"><h1>Item 2</h1></div>
                    <div className="item8"><h1>Item 3</h1></div>
                    <div className="item8"><h1>Item 4</h1></div>
                    <div className="item8"><h1>Item 5</h1></div>
                    <div className="item8"><h1>Item 6</h1></div>
                    <div className="item8"><h1>Item 7</h1></div>
                    <div className="item8"><h1>Item 8</h1></div>
                    <div className="item8"><h1>Item 9</h1></div>
                    <div className="item8"><h1>Item 10</h1></div>
                    <div className="item8"><h1>Item 11</h1></div>
                    <div className="item8"><h1>Item 12</h1></div>
                </div> 
            </div>
        </ContainerFlex>

        </>
    );
};

export default RecipeLibrary;