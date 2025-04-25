import { FaWhatsapp, FaInstagram, FaFacebook, FaApple, FaGooglePlay } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <section className=" pt-16 relative">
            <div className="absolute inset-0 h-2/5 bg-blue-500 opacity-95 -z-10" />
            <div className="container mx-auto px-4 lg:px-6">
                {/* Encabezado */}
                <RevealOnScroll>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            ¡Conectemos!
                        </h2>
                        <p className="text-lg text-slate-900 max-w-2xl mx-auto">
                            Descarga nuestra app y disfruta de beneficios exclusivos
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Botones de descarga */}
                <RevealOnScroll delay={200}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
                        <button className="bg-orange-400 text-slate-900 px-8 py-4 rounded-full hover:bg-orange-500 transition-all flex items-center gap-2 font-semibold">
                            Reservar ahora
                        </button>
                        <span className="text-slate-800">- O -</span>
                        <div className="flex gap-4">
                            <button className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all flex items-center gap-2">
                                <FaApple className="text-xl" />
                                App Store
                            </button>
                            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all flex items-center gap-2">
                                <FaGooglePlay className="text-xl" />
                                Play Store
                            </button>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Formulario */}
                <RevealOnScroll delay={300}>
                    <div className="max-w-md mx-auto mb-20">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
                                Recibe ofertas especiales
                            </h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Número de teléfono"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                    ¡Quiero promociones!
                                </button>
                            </form>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Canales de contacto */}
                <RevealOnScroll delay={400}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
                        <a 
                            href="https://wa.me/123456789" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center"
                        >
                            <FaWhatsapp className="text-4xl text-green-500 mb-2" />
                            <span className="font-semibold text-slate-800">WhatsApp</span>
                            <span className="text-sm text-slate-600">+1 234 567 890</span>
                        </a>

                        <a 
                            href="mailto:contacto@lavanderia.com" 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center"
                        >
                            <HiMail className="text-4xl text-blue-600 mb-2" />
                            <span className="font-semibold text-slate-800">Email</span>
                            <span className="text-sm text-slate-600">contacto@lavanderia.com</span>
                        </a>

                        <a 
                            href="https://instagram.com/lavanderia_ok" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center"
                        >
                            <FaInstagram className="text-4xl text-pink-600 mb-2" />
                            <span className="font-semibold text-slate-800">Instagram</span>
                            <span className="text-sm text-slate-600">@lavanderia_ok</span>
                        </a>

                        <a 
                            href="https://facebook.com/lavanderiaOK" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center"
                        >
                            <FaFacebook className="text-4xl text-blue-700 mb-2" />
                            <span className="font-semibold text-slate-800">Facebook</span>
                            <span className="text-sm text-slate-600">/lavanderiaOK</span>
                        </a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Footer */}
            <footer className="bg-slate-800 text-white py-12">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Columna 1 */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">La empresa</h4>
                            <ul className="space-y-2">
                                <li><Link to="/sobre-nosotros" className="hover:text-orange-400 transition-colors">Sobre nosotros</Link></li>
                                <li><Link to="/locales" className="hover:text-orange-400 transition-colors">Nuestros locales</Link></li>
                                <li><Link to="/empleo" className="hover:text-orange-400 transition-colors">Trabaja con nosotros</Link></li>
                                <li><Link to="/tienda" className="hover:text-orange-400 transition-colors">Tienda</Link></li>
                            </ul>
                        </div>

                        {/* Columna 2 */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Servicios</h4>
                            <ul className="space-y-2">
                                <li><Link to='/lavado-express ' className="hover:text-orange-400 transition-colors">Lavado express</Link></li>
                                <li><Link to='/planchado-profesional ' className="hover:text-orange-400 transition-colors">Planchado profesional</Link></li>
                                <li><Link to='/limpieza-en-seco ' className="hover:text-orange-400 transition-colors">Limpieza en seco</Link></li>
                            </ul>
                        </div>

                        {/* Columna 3 */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><Link to="/terminos" className="hover:text-orange-400 transition-colors">Términos y condiciones</Link></li>
                                <li><Link to="/privacidad" className="hover:text-orange-400 transition-colors">Política de privacidad</Link></li>
                                <li><Link to="/garantias" className="hover:text-orange-400 transition-colors">Garantías</Link></li>
                            </ul>
                        </div>

                        {/* Columna 4 */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Descarga la app</h4>
                            <div className="flex flex-col gap-3">
                                <button className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600">
                                    <FaApple className="text-xl" />
                                    App Store
                                </button>
                                <button className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600">
                                    <FaGooglePlay className="text-xl" />
                                    Google Play
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 mt-12 pt-8 text-center">
                        <p className="text-slate-400">
                            © 2024 Lavandería Express. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactUs;