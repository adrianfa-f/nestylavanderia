import SEO from '../componentes/SEO';
import Header from '../componentes/Header'

const WarrantyPage = () => (
    <main className="container mx-auto px-4 py-12">
        <SEO 
            title="Garantías de Servicio - Lavandería Express"
            description="Nuestras políticas de garantía y satisfacción del cliente"
            keywords="garantía lavandería, política devoluciones, satisfacción garantizada"
        />
        <Header/>
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Nuestras Garantías</h1>

        <div className="prose max-w-none">
            <section className="bg-blue-50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold mb-4">Garantía de Calidad Total</h2>
                <ul className="space-y-3">
                    <li>✔️ Devolución del 100% si no está satisfecho</li>
                    <li>✔️ Reposición gratuita de prendas dañadas</li>
                    <li>✔️ Respuesta en menos de 24 horas</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Proceso de Reclamación</h2>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="bg-blue-800 text-white px-4 py-2 rounded-full">1</div>
                        <div>
                            <h3 className="font-semibold">Notificar el problema</h3>
                            <p>Contacta dentro de las 48 horas posteriores al servicio</p>
                        </div>
                    </div>
                    {/* Repetir para pasos 2 y 3 */}
                </div>
            </section>
        </div>
    </main>
)

export default WarrantyPage;