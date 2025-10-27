import React from "react";

const Card = ({ name, description, image, price = 0, category }) => {
    return (
        <div className="card w-72 sm:w-72 bg-base-100 shadow-md hover:scale-105 duration-500 cursor-pointer border border-gray-200 rounded-lg">

            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold ">{name}</h2>
                <p className="text-gray-600 text-sm">{description}</p>

                {/* Price & Category Badge */}
                <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold text-primary">
                        {price === 0 ? "Free" : `₹${price}`}
                    </span>
                    {category && (
                        <span
                            className={`badge ${category === "Free" ? "badge-success" : "badge-warning"
                                }`}
                        >
                            {category}
                        </span>
                    )}
                </div>

                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
