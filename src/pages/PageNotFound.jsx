import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Página no encontrada</p>
            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;