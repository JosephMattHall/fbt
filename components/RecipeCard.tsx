
import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2">
                <img className="h-64 w-full object-cover md:h-full" src={recipe.imageUrl} alt={recipe.name} />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-2">{recipe.name}</h2>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex space-x-6 text-sm text-gray-500 mb-6">
                    <span>Prep: {recipe.prepTime}</span>
                    <span>Cook: {recipe.cookTime}</span>
                    <span>Servings: {recipe.servings}</span>
                </div>
                <button className="self-start bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-dark transition duration-300">
                    View Recipe
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;
