import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
    position: relative;
    width: 120px;
`;

const StyledSelect = styled.select`
    appearance: none;
    background-color: #f04b37;
    color: white;
    font-size: 14px;
    padding: 10px 0px 10px 15px;
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: #d43a27;
    }
`;

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: white;
`;

const SelectDropdown: React.FC = () => {
    return (
        <SelectContainer>
            <StyledSelect>
                <Option value="destaque">Destaque</Option>
                <Option value="melhores-avaliacoes">Melhores avaliações</Option>
                <Option value="tendencias">Tendências</Option>
            </StyledSelect>
            <Arrow>▼</Arrow>
        </SelectContainer>
    );
};

const Option = styled.option`
    color: #000;
`;

export default SelectDropdown;