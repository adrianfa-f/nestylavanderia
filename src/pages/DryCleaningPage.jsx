// pages/DryCleaningPage.jsx
import SEO from '../componentes/SEO'
import Header from '../componentes/Header'

const DryCleaningPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Limpieza en Seco - Lavandería Express"
            description="Servicio especializado para prendas delicadas"
            keywords="limpieza en seco, prendas delicadas, trajes, vestidos"
        />
        <Header/>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Limpieza en Seco Profesional</h1>
                <p className="text-lg mb-6">Cuidado especializado para tus prendas más valiosas</p>
                <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Solicitar Servicio
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                        Ver Precios
                    </button>
                </div>
            </div>
            <img 
                src="/img/dry-cleaning.jpg" 
                alt="Proceso de limpieza en seco" 
                className="rounded-xl shadow-lg"
                loading="lazy"
            />
        </div>

        <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">¿Qué podemos limpiar?</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                    <div className="text-4xl mb-4">👔</div>
                    <h3 className="font-semibold mb-2">Trajes y Chaquetas</h3>
                    <p className="text-sm">Lana, seda y tejidos delicados</p>
                </div>
                {/* Más elementos */}
            </div>
        </section>
    </main>
);

export default DryCleaningPage;