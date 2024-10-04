import React from 'react';

const PlayIcon: React.FC = () => (
    <svg 
        width="68" 
        height="68" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg" 
        data-svg="play-circle"
    >
        <polygon 
            fill="red"
            stroke="red"
            strokeWidth="1.1" 
            points="8.5 7 13.5 10 8.5 13"
        />
        <circle 
            fill="none"
            stroke="white"
            strokeWidth="1.1" 
            cx="10" 
            cy="10" 
            r="9" 
        />
    </svg>
);

export default PlayIcon;