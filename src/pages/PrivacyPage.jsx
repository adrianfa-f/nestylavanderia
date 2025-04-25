// pages/PrivacyPage.jsx
import SEO from '../componentes/SEO';
import Header from '../componentes/Header';

const PrivacyPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Política de Privacidad - Lavandería Express"
            description="Cómo protegemos y gestionamos tus datos personales"
            keywords="privacidad datos, protección información, RGPD"
        />
        <Header/>
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Política de Privacidad</h1>

        <div className="prose max-w-none">
            <section>
                <h2 className="text-2xl font-semibold mb-4">Recopilación de Datos</h2>
                <p>Explicación detallada de los datos que recopilamos...</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Uso de la Información</h2>
                <p>Finalidades específicas del tratamiento de datos...</p>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl mt-8">
                <h2 className="text-2xl font-semibold mb-4">Tus Derechos</h2>
                <ul className="space-y-3">
                    <li>→ Acceso a tus datos personales</li>
                    <li>→ Rectificación de información</li>
                    <li>→ Eliminación de registros</li>
                </ul>
            </section>
        </div>
    </main>
)

export default PrivacyPage;