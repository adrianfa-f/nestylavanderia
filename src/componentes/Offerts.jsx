import { FiCheckCircle, FiZap, FiCalendar } from 'react-icons/fi';
import RevealOnScroll from './RevealOnScroll';
import { FaTshirt } from 'react-icons/fa';

const PricingSection = () => {
    return (
        <section className="py-20 bg-blue-100 overflow-x-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Encabezado */}
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                            Planes y Precios
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Servicios adaptados a tus necesidades con la mejor relación calidad-precio
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Contenedor principal */}
                <RevealOnScroll delay={200}>
                    <div className="flex flex-col md:flex-row gap-8 -mx-4">
                        {/* Sección Lavado y Doblado */}
                        <div className="md:w-2/3 relative px-4">
                            {/* Fondo negro estrecho */}
                            <div className="absolute inset-y-0 inset-x-8 md:inset-x-20 w-4/5 bg-black -z-10 opacity-95" />
                            
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white pt-4 mb-8 ml-2 translate-x-4 md:translate-x-0 flex justify-center items-center gap-2">
                                    <FiZap className="text-orange-400" />
                                    Lavado y Doblado Profesional
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
                                    {/* Plan Semanal */}
                                    <div className="bg-white pr-8 pb-8 shadow-2xl border-2 border-blue-800 transform hover:-translate-y-2 transition-all duration-300">
                                        <div className="sticky top-0 left-0 flex items-center gap-2 h-10 w-40 bg-blue-800 text-white text-xl font-sans font-semibold">
                                            <FiCalendar /> Plan Semanal
                                        </div>
                                        <div className='pl-8 pt-4'>
                                            <div className="flex mb-6">
                                                <div className="text-4xl font-bold text-blue-800">$49.99</div>
                                                <div className="flex items-end font-medium text-slate-500">/ por mes</div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 font-bold text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Hasta 15kg por recogida
                                                </div>
                                                <div className="flex items-center gap-2 font-bold text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    4 recogidas al mes
                                                </div>
                                                <div className="flex items-center gap-2 font-bold text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Doblado profesional incluido
                                                </div>
                                            </div>
                                            <button className="mt-8 w-full bg-blue-600 font-bold text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                                Comenzar ahora
                                            </button>
                                        </div>
                                    </div>
                                    {/* Plan Quincenal */}
                                    <div className="bg-white pr-8 pb-8 shadow-2xl border-2 border-blue-800 transform hover:-translate-y-2 transition-all duration-300">
                                        <div className="sticky top-0 left-0 flex items-center gap-2 h-10 w-48 bg-blue-800 text-white text-xl font-sans font-semibold">
                                            <FiCalendar /> Plan Quincenal
                                        </div>
                                        <div className='pl-8 pt-4'>
                                            <div className="flex mb-6">
                                                <div className="text-4xl font-bold text-blue-800">$79.99</div>
                                                <div className="flex items-end font-medium text-slate-500">/ por mes</div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center font-bold gap-2 text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Hasta 25kg por recogida
                                                </div>
                                                <div className="flex items-center font-bold gap-2 text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    2 recogidas al mes
                                                </div>
                                                <div className="flex items-center font-bold gap-2 text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Servicio prioritario
                                                </div>
                                            </div>
                                            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                                Comenzar ahora
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sección Limpieza en Seco */}
                        <div className="md:w-1/3 relative px-4">
                            {/* Fondo naranja estrecho */}
                            <div className="absolute inset-y-0 inset-x-8 md:inset-x-10 w-4/5 bg-orange-400 -z-10" />
                            
                            

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-8 ml-2 flex justify-center pt-4 items-center gap-2">
                                    <FaTshirt className="text-blue-600" />
                                    Limpieza en Seco
                                </h3>

                                <div className="pb-4">
                                    <div className="bg-white pr-8 pb-8 shadow-2xl border-2 border-blue-800 transform hover:-translate-y-2 transition-all duration-300">
                                        <div className="sticky top-0 left-0 flex items-center gap-2 h-10 w-40 bg-blue-800 text-white text-xl font-sans font-semibold">
                                            Por prenda
                                        </div>
                                        <div className='pl-8 pt-4'>
                                            <div className="flex mb-6">
                                                <div className="text-4xl font-bold text-blue-800">$6.99</div>
                                                <div className="bg-orange-400 text-slate-800 ml-12 px-4 py-2 rounded-full text-sm font-bold">
                                                    -20% en 5+ prendas
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center font-bold gap-2 text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Prendas delicadas
                                                </div>
                                                <div className="flex items-center font-bold gap-2 text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Tratamiento anti-manchas
                                                </div>
                                                <div className="flex items-center font-bold gap-2 text-slate-600">
                                                    <FiCheckCircle className="text-green-500" />
                                                    Planchado profesional incluido
                                                </div>
                                            </div>
                                            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                                Solicitar servicio
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default PricingSection;