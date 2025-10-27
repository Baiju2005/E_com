import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom';

const Items = () => {
    const items = [
        {
            id: 1,
            name: "Item One",
            description: "This is the first free item.",
            category: "Paid",
            price: 433,
            image:
                "https://super73.com/cdn/shop/files/SUPER73_MY24_RAdventure_Core_Sandstorm_FrontHero_1200x.jpg",
        },
        {
            id: 2,
            name: "Item Two",
            description: "This is the second paid item.",
            category: "Paid",
            price: 499,
            image:
                "https://super73.com/cdn/shop/files/SUPER73_MY24_RAdventure_Core_Sandstorm_FrontHero_1200x.jpg",
        },
        {
            id: 3,
            name: "Item Three",
            description: "This is another free item.",
            category: "Free",
            price: 0,
            image:
                "https://super73.com/cdn/shop/files/SUPER73_MY24_RAdventure_Core_Sandstorm_FrontHero_1200x.jpg",
        },
        {
            id: 4,
            name: "Item Four",
            description: "This is another free item.",
            category: "Free",
            price: 0,
            image:
                "https://super73.com/cdn/shop/files/SUPER73_MY24_RAdventure_Core_Sandstorm_FrontHero_1200x.jpg",
        },
        {
            id: 5,
            name: "Item Five",
            description: "This is another paid item.",
            category: "Paid",
            price: 999,
            image:
                "https://super73.com/cdn/shop/files/SUPER73_MY24_RAdventure_Core_Sandstorm_FrontHero_1200x.jpg",
        },
    ];

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-6">
            {/* Heading */}
            <div className="mt-28 text-center mb-16">
                <h1 className="text-2xl font-semibold md:text-4xl">Our Items</h1>
                <p className="mt-8 text-gray-600">
                    Browse through our selection of items — both Free and Paid — crafted with
                    quality and care.
                </p>
            </div>

            <div className="mb-10 flex justify-center">

                <Link to="/" className="px-6 py-2 text-gray-100 bg-gray-900 mb-10">Back to Home</Link>
            </div>




            {/* ✅ Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Items;
