
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-brand-primary tracking-wide uppercase">Our Story</h2>
                    <p className="mt-1 text-4xl font-extrabold text-brand-dark sm:text-5xl sm:tracking-tight lg:text-6xl">From Our Kitchen to Yours</p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">A tradition of quality and taste passed down through generations.</p>
                </div>

                <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <img className="rounded-lg shadow-xl" src="https://picsum.photos/600/400?image=835" alt="Family photo" />
                    </div>

                    <div className="relative mt-12 lg:mt-0">
                        <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight sm:text-3xl">Our Family's Promise</h3>
                        <p className="mt-3 text-lg text-gray-500">
                            First Bake Tortillas started in our grandmother's kitchen in 1998. With a passion for authentic Mexican cuisine and a commitment to using only the freshest, simplest ingredients, she created a tortilla that was not just food, but a piece of our family's heritage.
                        </p>
                        <p className="mt-4 text-lg text-gray-500">
                            Today, we continue her legacy. Every tortilla we make is a testament to her dedication to quality. We believe that good food brings people together, and we're honored to be a part of your family's meals.
                        </p>
                         <p className="mt-4 text-lg text-gray-500">
                           We still use the same time-honored techniques, ensuring each tortilla has the perfect texture and flavor. From our family to yours, we hope you enjoy the authentic taste of First Bake Tortillas. Thank you for making us a part of your table.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
