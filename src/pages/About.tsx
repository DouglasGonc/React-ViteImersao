import React from 'react';
import UsuariosGrid from './services/teste';

const About: React.FC = () => {
    return (
        <>
            <h1>Sobre nós</h1>
            <p>Esta é a página sobre.</p>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <UsuariosGrid />
            <br />
            <hr />
            <br />
        </>
    );
};

export default About;