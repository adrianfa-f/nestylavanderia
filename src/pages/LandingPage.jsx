import React from "react";
import Header from "../componentes/Header"
import HeroSection from "../componentes/HeroSection";
import Feature from '../componentes/Feature'
import Offerts from '../componentes/Offerts'
import Contacts from '../componentes/Contacts'
import SEO from '../componentes/SEO';

const LandingPage = () => {
    return (
        <div>
            <SEO 
                title="Lavandería Express - Servicio Premium a Domicilio"
                description="Servicio profesional de lavandería con recogida y entrega a domicilio. Lavado express en 24h, planchado profesional y limpieza en seco."
                keywords="lavandería a domicilio, servicio de lavandería, lavado express, planchado profesional, limpieza en seco"
            />
            <div className="w-full h-12 flex items-center justify-center bg-emerald-900">
                <h1 className="text-lg text-white"><strong>Calle Pendejal entre cojon y cojon</strong></h1>
            </div>
            <Header/>
            <HeroSection/>
            <Feature/>
            <Offerts/>
            <Contacts/>
        </div>
    )
}

export default LandingPage;