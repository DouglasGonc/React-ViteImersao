import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Certifique-se de que o caminho está correto

interface Usuario {
    id: number;
    Nome: string;
    'E-mail': string;
}

const UsuariosGrid: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Função para buscar os usuários
        const fetchUsuarios = async () => {
            const { data, error } = await supabase
                .from('usuarios') // Certifique-se que o nome da tabela está correto
                .select('*');

            if (error) {
                console.error("Erro ao buscar usuários:", error.message);
            } else {
                setUsuarios(data || []); // Atualizando o estado com os dados recebidos
            }

            setLoading(false); // Desativa o estado de carregamento
        };

        fetchUsuarios(); // Chama a função para buscar os usuários ao carregar o componente
    }, []);

    if (loading) {
        return <div>Carregando...</div>; // Exibe um carregamento enquanto os dados estão sendo buscados
    }

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
                    <li>Nenhum usuário encontrado!</li>
                )}
            </ul>
        </div>
    );
};

export default UsuariosGrid;