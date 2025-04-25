import SEO from '../componentes/SEO';
import Header from '../componentes/Header';

const ExpressWashPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Lavado Express - Lavandería Express"
            description="Servicio de lavado rápido con entrega en 24 horas"
            keywords="lavado rápido, servicio express, lavandería urgente"
        />
        <Header/>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl font-bold text-blue-800 mb-6">Lavado Express</h1>
                <p className="text-lg mb-6">Tu ropa limpia y lista en menos de 24 horas</p>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                        <span className="bg-orange-400 p-2 rounded-full">🚿</span>
                        <span>Proceso de lavado profesional</span>
                    </li>
                    {/* Más elementos de lista */}
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                    Programar Recogida
                </button>
            </div>
            <img 
                src="/img/express-wash.jpg" 
                alt="Proceso de lavado express" 
                className="rounded-xl shadow-lg"
                loading="lazy"
            />
        </div>

        <section className="mt-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Cómo Funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pasos del proceso */}
            </div>
        </section>
    </main>
)

export default ExpressWashPage;