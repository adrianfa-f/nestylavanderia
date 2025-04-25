// pages/TermsPage.jsx
import SEO from '../componentes/SEO';
import Header from '../componentes/Header';

const TermsPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Términos y Condiciones - Lavandería Express"
            description="Condiciones generales de uso de nuestros servicios"
            keywords="términos legales, condiciones de servicio"
        />
        <Header/>
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Términos y Condiciones</h1>

        <div className="prose max-w-none">
            <section>
                <h2 className="text-2xl font-semibold mb-4">1. Aceptación de Términos</h2>
                <p>Texto legal detallado...</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">2. Responsabilidades</h2>
                <p>Detalles de responsabilidades...</p>
            </section>
        </div>
    </main>
);

export default TermsPage;