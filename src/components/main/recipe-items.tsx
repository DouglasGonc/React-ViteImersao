import React from "react";
import styled from "styled-components";

const BoxGrid = styled.div`
    color: black;

    img{
        border-radius: 10px;
        width: 100%;
    }

    h3{
        font-size: 16px;
        font-weight: 500;
        unicode-bidi: isolate;
        margin: 10px 0;
    }

    .infBox{
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 0.8em;
    }
    
`;

const RecipesItems: React.FC = () => {
    return (
        <BoxGrid> 
            <img src="https://via.placeholder.com/300x160" alt="Thumbnail"/>
            <h3>Chef John's Turkey Sloppy Joes</h3>
            <div className="infBox">
                <span>5.0(524)</span>
                <span>by Aleaxa Dorchest</span>
            </div>
        </BoxGrid>
    );
};

export default RecipesItems;