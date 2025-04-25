// pages/CareersPage.jsx
import SEO from '../componentes/SEO';
import Header from '../componentes/Header'

const CareersPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Oportunidades Laborales - Lavandería Express"
            description="Únete a nuestro equipo de profesionales"
            keywords="trabajo lavandería, empleo, oportunidades laborales"
        />
        <Header/>
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Únete a Nuestro Equipo</h1>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="prose">
                <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
                <ul>
                    <li>Capacitación constante</li>
                    <li>Horarios flexibles</li>
                    <li>Ambiente de trabajo agradable</li>
                </ul>
            </div>

            <form className="space-y-4">
                <input type="text" placeholder="Nombre completo" className="w-full p-3 border rounded-lg" />
                <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-lg" />
                <input type="file" className="w-full p-3 border rounded-lg" />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Enviar Solicitud
                </button>
            </form>
        </div>
    </main>
);

export default CareersPage;