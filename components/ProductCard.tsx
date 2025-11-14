
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img className="w-full h-56 object-cover object-center" src={product.imageUrl} alt={product.name} />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 text-base mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-brand-primary">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">{product.unit}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
