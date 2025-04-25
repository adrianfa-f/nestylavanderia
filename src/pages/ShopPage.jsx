// pages/ShopPage.jsx
import SEO from '../componentes/SEO';
import ProductCard from '../componentes/ProductCard';
import Header from '../componentes/Header'

const products = [
    {
        id: 1,
        name: 'Kit de Lavado Premium',
        price: 29.99,
        description: 'Incluye detergente, suavizante y quitamanchas',
        image: '/img/kit-lavado.jpg',
        stock: 15,
        sku: 'KIT-2024',
        features: ['Para 50 lavados', 'Apto para colores', 'Envase reciclable']
    },
    {
        id: 2,
        name: 'Plancha Profesional a Vapor',
        price: 149.99,
        description: 'Plancha industrial con sistema de vapor continuo',
        image: '/img/plancha-profesional.jpg',
        stock: 8,
        sku: 'PLA-3000',
        features: ['2000W de potencia', 'Depósito 1L', 'Base cerámica']
    },
    {
        id: 3,
        name: 'Bolsa de Lavandería Reutilizable',
        price: 12.99,
        description: 'Bolsa ecológica para transporte de prendas',
        image: '/img/bolsa-lavanderia.jpg',
        stock: 25,
        sku: 'BOL-ECO',
        features: ['Material impermeable', 'Capacidad 15kg', 'Asas reforzadas']
    },
    {
        id: 4,
        name: 'Detergente Hypoalergénico',
        price: 18.50,
        description: 'Para pieles sensibles y prendas delicadas',
        image: '/img/detergente-hypo.jpg',
        stock: 20,
        sku: 'DET-HYPO',
        features: ['Sin perfumes', 'Biodegradable', '5L']
    },
    {
        id: 5,
        name: 'Perchas de Madera Premium',
        price: 24.99,
        description: 'Pack de 10 perchas de haya natural',
        image: '/img/perchas-madera.jpg',
        stock: 30,
        sku: 'PER-MAD',
        features: ['Antideslizantes', 'Grosor 15mm', 'Acabado natural']
    },
    {
        id: 6,
        name: 'Cepillo Eliminador de Pelusas',
        price: 9.99,
        description: 'Cepillo profesional para prendas de lana',
        image: '/img/cepillo-pelusas.jpg',
        stock: 40,
        sku: 'CEP-500',
        features: ['Cerdas naturales', 'Ergonómico', 'Limpieza en seco']
    },
    {
        id: 7,
        name: 'Set de Viaje para Lavandería',
        price: 34.99,
        description: 'Incluye neceser, jabón en pastillas y bolsa térmica',
        image: '/img/set-viaje.jpg',
        stock: 12,
        sku: 'SET-VIA',
        features: ['Portátil', 'Ecológico', 'Para 7 días']
    }
]

const ShopPage = () => (
    <main className="container mx-auto px-4 py-12">
        <Header/>
        <SEO 
            title="Tienda de Productos - Lavandería Express"
            description="Productos profesionales para el cuidado de tus prendas"
            keywords="detergentes, productos lavandería, accesorios limpieza"
        />

        <h1 className="text-4xl font-bold text-blue-800 mb-8">Productos Destacados</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    </main>
);

export default ShopPage;