import React from "react";
import logo from "../assets/Logo.png"
import Menu from "./Menu"

const Header = () => {
    return (
        <div className="flex w-full justify-center items-center shadow-lg sticky top-0 z-50 bg-cyan-50 h-28">
            {/* Cambiar el alt cuando cambie el logo */}
            <img className="h-20 w-auto" src={logo} alt="NestyLabs" />
            <div className="flex justify-end mr-4">
                <Menu/>
            </div>
        </div>
    )
}

export default Header;