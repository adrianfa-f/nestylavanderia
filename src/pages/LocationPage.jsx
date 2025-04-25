// pages/LocationsPage.jsx
import SEO from '../componentes/SEO';
import MapComponent from '../componentes/Map';
import Header from '../componentes/Header';

const LocationsPage = () => {
    // Definir las ubicaciones
    const locations = [
        {
            name: "Sucursal Centro",
            coordinates: [40.416775, -3.703790], // Coordenadas de ejemplo (Madrid)
            address: "Calle Principal 123",
            schedule: "Lunes a Viernes: 8:00 - 20:00"
        },
        {
            name: "Sucursal Norte",
            coordinates: [40.438131, -3.698614], 
            address: "Avenida del Parque 45",
            schedule: "Lunes a Sábado: 9:00 - 22:00"
        }
    ];

    return (
        <main className="container mx-auto px-4 py-12">
            <SEO 
                title="Nuestras Sucursales - Lavandería Express"
                description="Encuentra nuestra ubicación más cercana"
                keywords="sucursales, ubicación, locales"
            />
            <Header/>
            <h1 className="text-4xl font-bold text-blue-800 mb-8">Nuestras Ubicaciones</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    {locations.map((location, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-xl font-bold mb-2">{location.name}</h2>
                            <p className="text-slate-600">{location.address}</p>
                            <p className="text-slate-500 text-sm mt-2">{location.schedule}</p>
                        </div>
                    ))}
                </div>
                <MapComponent locations={locations} />
            </div>
        </main>
    );
};

export default LocationsPage;