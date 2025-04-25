import React from "react";

const ProductCard = ({ image, name, price, description, stock, sku, rating }) => (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
        <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-contain mb-4"
            loading="lazy"
        />
        <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold text-slate-800">{name}</h2>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {sku}
            </span>
        </div>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
            <div>
                <p className="text-2xl font-bold text-blue-800">${price}</p>
                <p className={`text-sm ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock > 0 ? `Disponible (${stock})` : 'Agotado'}
                </p>
            </div>
            <button 
                className="bg-orange-400 text-slate-800 px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
                disabled={stock === 0}
            >
                {stock > 0 ? 'Añadir al carrito' : 'Agotado'}
            </button>
        </div>
    </article>
);

export default ProductCard;