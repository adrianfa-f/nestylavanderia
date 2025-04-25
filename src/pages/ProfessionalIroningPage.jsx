// pages/ProfessionalIroningPage.jsx
import SEO from '../componentes/SEO'
import Header from '../componentes/Header'

const ProfessionalIroningPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Planchado Profesional - Lavandería Express"
            description="Servicio de planchado profesional para prendas impecables"
            keywords="planchado ropa, servicio planchado, arreglo prendas"
        />
        <Header/>
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Planchado Profesional</h1>
            <p className="text-xl text-slate-600">Prendas perfectamente planchadas como nuevas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Nuestro Proceso</h2>
                    <ul className="space-y-3">
                        <li>→ Clasificación por tipos de tela</li>
                        <li>→ Planchado con equipos industriales</li>
                        <li>→ Inspección de calidad final</li>
                    </ul>
                </div>
                <img 
                    src="/img/planchado.jpg" 
                    alt="Proceso de planchado" 
                    className="rounded-xl"
                    loading="lazy"
                />
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Tarifas</h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                        <span>Camisas</span>
                        <span className="font-bold">$3.99/unidad</span>
                    </div>
                    {/* Más tarifas */}
                </div>
            </div>
        </div>
    </main>
);

export default ProfessionalIroningPage;