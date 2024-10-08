import React from 'react';
import styled from 'styled-components';

const CicleSocial = styled.a`
    width: 35px;
    height: 35px;
    border: 1px solid #5890FF;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    svg{
        width: 18px;
        height: 18px;
        fill: #5890FF; 
    }

    &:hover, &:hover svg{
        background-color: #5890FF;
        fill: #fff; 
    }
`;

const FacebookIcon: React.FC = () => {
  return (
    <CicleSocial>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M9 8H6V12H9V21H13V12H16L17 8H13V6C13 5.46957 13.2107 4.96086 13.5858 4.58579C13.9609 4.21071 14.4696 4 15 4H17V0H15C13.4087 0 11.8826 0.632141 10.7574 1.75736C9.63214 2.88258 9 4.4087 9 6V8Z" />
        </svg>
    </CicleSocial>
  );
};

export default FacebookIcon;