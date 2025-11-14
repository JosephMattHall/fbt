
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { Product, Recipe } from '../types';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [featuredRecipe, setFeaturedRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch featured products
                const productsQuery = query(collection(db, 'products'), orderBy('sortIndex'), limit(3));
                const productsSnapshot = await getDocs(productsQuery);
                const productsData = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
                setProducts(productsData);

                // Fetch featured recipe
                const recipeQuery = query(collection(db, 'recipes'), where('featured', '==', true), limit(1));
                const recipeSnapshot = await getDocs(recipeQuery);
                if (!recipeSnapshot.empty) {
                    const recipeData = { id: recipeSnapshot.docs[0].id, ...recipeSnapshot.docs[0].data() } as Recipe;
                    setFeaturedRecipe(recipeData);
                }

            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load content. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">{error}</div>;
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[60vh] text-white" style={{ backgroundImage: `url('https://picsum.photos/1600/900?image=1060')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Authentic Taste, Family Tradition.</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-yellow-100">Freshly made tortillas from our family to yours. Experience the difference of First Bake.</p>
                    <Link to="/shop" className="mt-8 bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-dark transition duration-300 transform hover:scale-105">
                        Shop Our Tortillas
                    </Link>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Our Favorites</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Hand-picked selection of our most popular tortillas.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Recipe Section */}
            {featuredRecipe && (
                 <section className="bg-brand-light py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Taste the Possibilities</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Get inspired with our favorite family recipe.</p>
                        </div>
                        <RecipeCard recipe={featuredRecipe} />
                    </div>
                </section>
            )}
        </div>
    );
};

export default HomePage;
