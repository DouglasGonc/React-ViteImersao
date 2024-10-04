import styled from 'styled-components';
import SearchIcon from './search-icon';
const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 528px;
    position: relative;
    background-color: #f9f5f4;
`;

const SearchIconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    pointer-events: none;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 15px 0px 15px 20px;
    border: none;
    font-size: 1.2rem;
    color: #4a4a4a;
    background-color: #f9f5f4;
    outline: none;
    &:focus {
        border-color: #000;
    }
`;

const SearchBar = () => {
    return (
        <SearchForm action="#" method="post">
            <SearchIconWrapper>
                <SearchIcon size={20} color="#4a4a4a" />
            </SearchIconWrapper>
            <SearchInput type="search" placeholder="Search for recipes..." />
        </SearchForm>
    );
};

export default SearchBar;