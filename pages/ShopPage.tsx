
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Product } from '../types';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';

const ShopPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const productsQuery = query(collection(db, 'products'), orderBy('sortIndex'));
                const productsSnapshot = await getDocs(productsQuery);
                const productsData = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
                setProducts(productsData);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load our products. Please check back later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-brand-primary tracking-wide uppercase">Our Products</h2>
                    <p className="mt-1 text-4xl font-extrabold text-brand-dark sm:text-5xl sm:tracking-tight lg:text-6xl">Taste the Tradition</p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Explore our full range of delicious, fresh-made tortillas. Perfect for any meal.
                    </p>
                </div>

                {loading && <Spinner />}
                {error && <div className="text-center py-20 text-red-500">{error}</div>}

                {!loading && !error && (
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopPage;
