import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Contato</h1>
            <p>Exibindo informações do contato: {id}</p>

            <Link to="/contato">Contato</Link>
        </>
    );
};

export default ContactDetails;