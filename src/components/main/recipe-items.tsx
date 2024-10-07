import React from "react";
import styled from "styled-components";

const BoxGrid = styled.div`
    color: black;

    img{
        border-radius: 30px;
    }
    
`;

const RecipesItems: React.FC = () => {
    return (
        <BoxGrid> 
            <img src="https://via.placeholder.com/300x160" alt="Thumbnail"/>
        
        </BoxGrid>
    );
};

export default RecipesItems;