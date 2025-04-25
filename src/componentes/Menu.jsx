import { useRef, useEffect, useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useClickOutside } from '../Hooks/useClickOutside';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState(null);
    const menuRef = useRef()
    useClickOutside(menuRef, () => setIsMenuOpen(false))

    const handleMouseEnter = () => {
        clearTimeout(closeTimeout);
        setIsServicesHovered(true);
    };

    const handleMouseLeave = () => {
        // Iniciamos el timeout para cerrar después de 300ms
        const timeout = setTimeout(() => {
            setIsServicesHovered(false);
        }, 300);
        setCloseTimeout(timeout);
    };

    useEffect(() => {
        return () => clearTimeout(closeTimeout);
    }, [closeTimeout]);

    // Items del menú de servicios (desktop)
    const serviceItems = [
        { title: 'Lavado Express', delay: 'delay-75', to: '/lavado-express' },
        { title: 'Planchado Profesional', delay: 'delay-100', to: '/planchado-profesional' },
        { title: 'Lavado en Seco', delay: 'delay-150', to: '/limpieza-en-seco' },
    ];

    return (
        <header className="bg-cyan-50 shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10 relative">
                    <Link to='/' className='hover:text-blue-800 transition-colors duration-300 font-semibold'>Inicio</Link>
                    <div 
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center space-x-1 hover:text-blue-800 transition-colors duration-300">
                            <span className='font-semibold'>Servicios</span>
                            <FiChevronDown className={`transform transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`}/>
                        </button>
                        
                        {/* Dropdown Desktop */}
                        <nav className={`absolute flex flex-col top-11 -left-4 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 origin-top
                            ${isServicesHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                            {serviceItems.map((item, index) => (
                                <Link
                                    to={item.to}
                                    key={index}
                                    className={`p-3 hover:bg-blue-50 transition-all transform ${item.delay} 
                                        ${isServicesHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <nav className='hover:text-blue-800 transition-colors duration-300 font-semibold'>Precios</nav>
                    <nav className='hover:text-blue-800 transition-colors duration-300 font-semibold'>Contacto</nav>
                    <button className='bg-blue-600 rounded-full text-white hover:bg-blue-700 px-6 py-3 transition-all duration-300 font-semibold transform hover:scale-105'>
                        Reservar
                    </button>
                    <button className="bg-orange-400 text-slate-800 px-6 py-3 rounded-full hover:bg-orange-500 hover:scale-105 transition-all flex items-center justify-center gap-2 font-semibold duration-300">
                        <Link to='/locales'> Localización </Link> 
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} ref={menuRef}>
                    
                    <div className="p-6 space-y-8">
                        <div className="flex justify-end">
                            <FiX 
                                size={24} 
                                className="cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </div>
                        
                        {/* Elementos del menú con animación escalonada */}
                        {['Servicios', 'Precios', 'Contacto'].map((item, index) => (
                            <div 
                                key={index}
                                className={`opacity-0 transform -translate-y-4 transition-all duration-300 ease-out ${
                                    isMenuOpen ? 'opacity-100 translate-y-0' : ''
                                }`}
                                style={{ transitionDelay: `${index * 75}ms` }}
                            >
                                <nav className="text-lg font-semibold hover:text-blue-800">
                                    {item}
                                </nav>
                            </div>
                        ))}
                        
                        <button 
                            className={`w-full bg-orange-400 rounded-full text-slate-800 hover:bg-orange-500 px-6 py-3 transition-transform 
                                opacity-0 transform -translate-y-4 ${isMenuOpen ? 'opacity-100 translate-y-0' : ''}`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            Reservar
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;