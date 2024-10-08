import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerContact = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        flex: 1 1 0%;
    }
`;

const InfContact = styled.div`


    h1{
        margin: 0 0 20px 0;
        font-size: 42px;
        font-weight: 600;
        color: #000;
        text-transform: none;
    }

    p{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        unicode-bidi: isolate;
        margin: 0 0 50px 0;
    }
`;

const ConButton = styled.a`
    text-decoration: none;
    font-size: 12px;
    background-color: var(--button-color-primary);
    color: #fff;
    
    padding: 10px 30px;
    border-radius: 30px;

    &:hover{
        background-color: var(--button-color-hover);
        color: #fff;
    }
`;

const Formulario = styled.div`
    background-color: var(--button-color-primary);
    border: none;
    border-radius: 30px;
    padding: 40px;
    margin: 0 0 0 70px;

    .form{
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    p{
        color: #fff;
        margin-bottom: 7px;
    }
    .input{
        margin-bottom: 25px;
        width: 100%;
        height: 34px;
        border-radius: 30px;
        border: 1px solid #fff;
        background-color: transparent;
        padding: 0 8px;
    }
    .textarea{
        margin-bottom: 14px;
        border-radius: 30px;
        border: 1px solid #fff;
        background-color: transparent;
        padding: 8px;
        height: 94px;
        resize: none;
    }
    div{
        display: flex;
        justify-content: center;
    }
    .button{
        width: 200px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid yellow;
        cursor: pointer;
        background-color: yellow;
        font-size: 18px;
        transition: background-color, transform 0.8s;
    }

    .button:hover{
        border: 1px solid #fff;
        background-color: transparent;
        color: #fff;
        transform: scale(1.01);
    }
`;

const Contact: React.FC = () => {

    const [name, setName] = useState<string>(''); // Definindo os tipos para TypeScript
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    function SendEmail(e: React.FormEvent<HTMLFormElement>){ // Previne o recarregamento de pagina
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            toast.error("Preencha todos os campos"); // Exibe a notificação de erro
            return;
        }

        toast.success("Email enviado com sucesso!"); // Exibe a notificação de sucesso
    }
    
    return (
        <>
            <ContainerContact>
                <InfContact>
                    <h1>Hello, what's on your mind?</h1>
                    <p>Credibly administrate market positioning deliverables rather than clicks-and-mortar methodologies. Proactively formulate out-of-the-box technology with clicks-and-mortar testing procedures. Uniquely promote leveraged web-readiness for standards compliant value. Rapidiously pontificate cooperative mindshare via maintainable applications.</p>
                    <ConButton>Schedule a call</ConButton>
                </InfContact>
                <Formulario>
                    <form className="form" onSubmit={SendEmail}>
                        <p>Nome</p>
                        <input 
                            className="input"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <p>Email</p>
                        <input 
                            className="input"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <p>Mensagem</p>
                        <textarea 
                            className="textarea"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <div>
                            <input className="button" type="submit" value="Enviar" />
                        </div>
                    </form>
                </Formulario>
            </ContainerContact>
            <ToastContainer
                position="bottom-center" // Centraliza horizontalmente e coloca no fim da tela verticalmente
                autoClose={5000} // Tempo que o toast fica visível (opcional)
                hideProgressBar={false} // Esconde ou mostra a barra de progresso
                newestOnTop={false} // Define se o toast mais recente aparece no topo
                closeOnClick // Fecha o toast ao clicar nele
                rtl={false} // Define a direção do texto, se precisar de suporte para RTL (direita para esquerda)
                pauseOnFocusLoss // Pausa o timer ao perder o foco (ex. mudar de aba)
                draggable // Permite arrastar o toast
                pauseOnHover // Pausa o timer ao passar o mouse sobre o toast
            />
        </>
    );
};

export default Contact;