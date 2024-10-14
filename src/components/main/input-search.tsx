import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search-icon';
import { useState } from 'react';

interface InputBarProps {
    inputOpen: boolean;
}

const InputBar = styled.div<InputBarProps>`
    position: relative;

    input {
        width: ${(props) => (props.inputOpen ? '200px' : '0px')};
        padding: ${(props) => (props.inputOpen ? '8px 30px' : '8px 16px')};
        border: 1px solid ${(props) => (props.inputOpen ? 'var(--button-color-primary)' : 'transparent')};
        border-radius: 30px;
        transition: width 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
        outline: none;
        opacity: ${(props) => (props.inputOpen ? '1' : '0')};
    }

    .icon-container {
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translate(-50%, -50%);
        cursor: pointer;

        display: flex;
        align-items: center;
    }
`;

const LoginBar = () => {
    const [inputOpen, setInputOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleInput = () => {
        if (inputOpen && inputValue === '') {
            setInputOpen(false);
        } else if (!inputOpen) {
            setInputOpen(true);
        } else {
            console.log('Pesquisar:', inputValue);
        }
    };

    return (
        <InputBar $inputOpen={inputOpen}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Pesquisar..."
                id="texto"
            />
            <div className="icon-container" onClick={toggleInput}>
                <SearchIcon size={18} color="#4a4a4a" />
            </div>
        </InputBar>
    );
};

export default LoginBar;