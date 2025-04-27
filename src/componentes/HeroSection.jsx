import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiSmartphone, FiTruck } from 'react-icons/fi';
import lav1 from '../assets/hero/lav1.png';
import apk1 from '../assets/hero/apk1.png'
import RevealOnScroll from './RevealOnScroll'

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    
    const slides = [
        {
            image: lav1, // Reemplazar con tu imagen
            title: 'Servicio Express de Lavandería',
            description: 'Recogemos, lavamos y entregamos en menos de 24 horas'
        },
        {
            image: apk1, // Reemplazar con tu imagen
            title: 'App Móvil Exclusiva',
            description: 'Controla tu pedido en tiempo real desde cualquier lugar'
        }
    ];

    return (
        <section className="relative bg-blue-600 pt-8 pb-16 md:pb-48 h-[700px] md:h-[500px] mb-56">
            {/* Contenido Principal */}
            <div className="container mx-auto px-4 md:px-6 text-center">
                {/* Texto Principal */}
                <RevealOnScroll delay={100}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                        Lavandería Premium a Tu Puerta
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Servicio completo de lavado, planchado y entrega con garantía de calidad
                    </p>

                    {/* Botones de Acción */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                        <button className="bg-orange-400 text-slate-800 px-8 py-4 rounded-full hover:bg-orange-500 transition-all flex items-center justify-center gap-2 font-semibold">
                            <FiTruck className="text-xl" />
                            Programar Recogida
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2 font-semibold">
                            <FiSmartphone className="text-xl" />
                            Descargar App
                        </button>
                    </div>
                </RevealOnScroll>
                {/* Contenedor de Imagen y Descripción */}
                <RevealOnScroll delay={100}>
                    <div className="relative">
                        {/* Imagen desplazada a la izquierda */}
                        <div className="md:relative z-10 -mb-16 md:-mb-32 w-full md:max-w-2xl mr-auto">
                            <img 
                                src={slides[activeSlide].image}
                                alt="Servicio de lavandería"
                                className="rounded-xl shadow-2xl w-full object-cover h-64 md:h-96 transform md:translate-x-28"
                            />
                        </div>

                        {/* Descripción estrecha y desplazada a la derecha */}
                        <div className="relative z-20 -mt-20 md:-mt-28 ml-auto md:max-w-md">
                            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mx-4 transform translate-y-16 md:-translate-y-40 md:-translate-x-16">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                                    {slides[activeSlide].title}
                                </h3>
                                <p className="text-slate-600 md:text-lg">
                                    {slides[activeSlide].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Controles de Navegación */}
            <div className="absolute md:inset-x-72 bottom-8 md:w-96 md:bottom-16 flex z-20 justify-end gap-4 translate-x-28 translate-y-80 md:translate-x-72 md:translate-y-52">
                <button 
                    onClick={() => setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
                    className="p-3 bg-blue-800 rounded-full transition-all text-white shadow-lg hover:scale-110 transform duration-300"
                >
                    <FiArrowLeft className="text-2xl" />
                </button>
                <button 
                    onClick={() => setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
                    className="p-3 bg-blue-800 rounded-full transition-all text-white shadow-lg hover:scale-110 transform duration-300"
                >
                    <FiArrowRight className="text-2xl" />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;