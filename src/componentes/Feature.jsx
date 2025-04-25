import { FiTruck, FiClock, FiShield, FiStar, FiCalendar, FiMapPin } from 'react-icons/fi';
import RevealOnScroll from './RevealOnScroll'; // Asegúrate de importar tu componente de animación

const FeaturesSection = () => {
    const features = [
        {
            icon: <FiTruck className="w-8 h-8" />,
            title: "Recogida a Domicilio",
            description: "Recogemos tu ropa en la ubicación que nos indiques, sin coste adicional"
        },
        {
            icon: <FiClock className="w-8 h-8" />,
            title: "Entrega Express",
            description: "Servicio prioritario con entrega garantizada en menos de 24 horas"
        },
        {
            icon: <FiShield className="w-8 h-8" />,
            title: "Calidad Garantizada",
            description: "Proceso de lavado profesional con estándares de calidad certificados"
        },
        {
            icon: <FiStar className="w-8 h-8" />,
            title: "Trato Especial",
            description: "Cuidado especial para prendas delicadas y de alta costura"
        },
        {
            icon: <FiCalendar className="w-8 h-8" />,
            title: "Programación Flexible",
            description: "Agenda recogidas y entregas según tu disponibilidad"
        },
        {
            icon: <FiMapPin className="w-8 h-8" />,
            title: "Cobertura Extendida",
            description: "Servicio disponible en toda el área metropolitana y zonas aledañas"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Encabezado */}
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                            Nuestro Proceso de Trabajo
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Un servicio diseñado para tu comodidad y la mejor atención a tus prendas
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Grid de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <RevealOnScroll key={index} delay={(index + 1) * 100}>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                                <div className="flex flex-col items-center text-center">
                                    {/* Icono con efecto */}
                                    <div className="mb-6 text-blue-600 group-hover:text-orange-500 transition-colors duration-300">
                                        {feature.icon}
                                    </div>

                                    {/* Contenido */}
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;