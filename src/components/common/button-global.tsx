import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)<{ bgColor?: string; fontSize: string }>`
    text-decoration: none;
    font-size: ${(props) => props.fontSize || '16px'};
    background-color: ${(props) => props.bgColor || 'var(--button-color-primary)'};
    color: #fff;
    padding: 8px 30px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;

const StyledExternalLink = styled.a<{ bgColor?: string; fontSize: string }>`
    text-decoration: none;
    font-size: ${(props) => props.fontSize || '16px'};
    background-color: ${(props) => props.bgColor || 'var(--button-color-primary)'};
    color: #fff;
    padding: 8px 30px;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;

interface LinkButtonProps {
    text: string;
    toOrHref: string;
    fontSize?: string;
    bgColor?: string; 
    target?: string;
}

const ButtonGlobal: React.FC<LinkButtonProps> = ({ text, toOrHref, bgColor, fontSize = '16px', target }) => {

    const isExternalLink = (link: string) => {
        return link.startsWith('mailto:') || link.startsWith('http://') || link.startsWith('https://');
    };

    if (isExternalLink(toOrHref)) {
        return (
            <StyledExternalLink
                href={toOrHref}
                bgColor={bgColor}
                fontSize={fontSize}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
                {text}
            </StyledExternalLink>
        );
    }

    return (
        <StyledLink
            to={toOrHref}
            bgColor={bgColor}
            fontSize={fontSize}
        >
            {text}
        </StyledLink>
    );
};

export default ButtonGlobal;