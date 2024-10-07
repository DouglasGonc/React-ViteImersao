import React, { useEffect, useState } from 'react';
import Banner from '../components/main/banner';
import Newsletter from '../components/main/input-newslatter';
import SectionVideos from '../components/main/section-videos';
import RecipeLibrary from '../components/main/recipe-vibrary';
import UsuariosGrid from '../components/teste';
import { supabase } from '../supabaseClient'; // Certifique-se que o caminho está correto

const Home: React.FC = () => {
    const [usuarios, setUsuarios] = useState<any[]>([]); // Estado para armazenar os dados
    const [error, setError] = useState<string | null>(null); // Estado para armazenar erros

    // Hook useEffect para buscar dados quando o componente for montado
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const { data, error } = await supabase
                    .from('Usuarios') // Nome da tabela no Supabase
                    .select('*'); // Seleciona todas as colunas da tabela

                if (error) throw error;

                setUsuarios(data || []); // Atualiza o estado com os dados recebidos
            } catch (error: any) {
                console.error('Erro ao buscar usuários:', error.message);
                setError(error.message); // Atualiza o estado com o erro
            }
        };

        fetchUsuarios(); // Chama a função para buscar os dados
    }, []); // O array vazio garante que o useEffect rode apenas na montagem do componente

    return (
        <>
            <Banner />
            <RecipeLibrary />
            
            {/* Passa os dados dos usuários como props para UsuariosGrid */}
            <UsuariosGrid usuarios={usuarios} />

            {error && <p>Erro ao carregar usuários: {error}</p>} {/* Exibe o erro, se houver */}

            <br /><br /><br /><br />
            <SectionVideos />
            <Newsletter />
        </>
    );
};

export default Home;