import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix para los iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
})

// components/Map.jsx
const Map = ({ locations = [] }) => { // Valor por defecto para locations
    return (
        <MapContainer 
            center={[40.416775, -3.703790]} 
            zoom={13} 
            className="h-96 w-full rounded-xl z-0"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((loc, index) => (
                <Marker key={index} position={loc.coordinates}>
                    <Popup>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">{loc.name}</h3>
                            <p>{loc.address}</p>
                            <p>Horario: {loc.schedule}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map