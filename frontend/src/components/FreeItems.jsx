import React from "react";
import Card from "./Card";

const FreeItems = () => {
    const items = [
        {
            id: 1,
            name: "Item One",
            description: "This is the first free item.",
            category: "Paid",
            price: 0,
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

    const freeItems = items.filter((item) => item.category === "Free");

    return (
        <div className="max-w-screen-2xl mx-auto md:px-20 px-7 py-10 pt-24 ">
            <h1 className="font-semibold text-2xl pb-2">Free Offered Items</h1>
            <p className="text-gray-600 mb-6">
                Check out our collection of free items available for everyone.
            </p>

            <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-start gap-6">
                {freeItems.map((item) => (
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

export default FreeItems;
