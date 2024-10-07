import React from 'react';

interface UsuariosGridProps {
    usuarios: Array<{ id: number; Nome: string; 'E-mail': string }>;
}

const UsuariosGrid: React.FC<UsuariosGridProps> = ({ usuarios }) => {
    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.length > 0 ? (
                    usuarios.map((usuario) => (
                        <li key={usuario.id}>
                            Nome: {usuario.Nome}, E-mail: {usuario['E-mail']}
                        </li>
                    ))
                ) : (
                    <li>Nenhum usuário encontrado</li>
                )}
            </ul>
        </div>
    );
};

export default UsuariosGrid;