// pages/AboutPage.jsx
import SEO from '../componentes/SEO';
import Header from '../componentes/Header';

const AboutPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Sobre Nosotros - Lavandería Express"
            description="Conozca nuestra trayectoria y compromiso con el servicio de calidad"
            keywords="historia lavandería, sobre nosotros, valores empresa"
        />
        <Header/>
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Nuestra Historia</h1>

        <section className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Más de 10 años de experiencia</h2>
                    <p>Texto detallado con historia y valores...</p>
                </div>
                <img 
                    src="/img/about.jpg" 
                    alt="Nuestro equipo de trabajo" 
                    className="rounded-xl shadow-lg"
                    loading="lazy"
                />
            </div>
        </section>
    </main>
);

export default AboutPage;