import React from 'react';
import ProductItem from './ProductItem';

export const products = [ // Export products array
    {
        id: 1,
        image: "https://www.royaloakindia.com/media/catalog/product/l/s/ls_788.png",
        discount: "58% off",
        arrival: "New Arrival",
        title: "Royaloak Genting Malaysian Three...",
        collection: "MALAYSIAN COLLECTION",
        price: "₹24,990.00",
        oldPrice: "₹60,000.00",
    },
    {
        id: 2,
        image: "https://www.royaloakindia.com/media/catalog/product/l/s/ls_786.png",
        discount: "55% off",
        arrival: "New Arrival",
        title: "Royaloak 1 Man Sitting Man Sculptur...",
        collection: "MALAYSIAN COLLECTION",
        price: "₹1,698.00",
        oldPrice: "₹3,800.00",
    },
    {
        id: 3,
        image: "https://www.royaloakindia.com/media/catalog/product/l/s/ls_788.png",
        discount: "58% off",
        arrival: "New Arrival",
        title: "Royaloak Genting Malaysian Three...",
        collection: "MALAYSIAN COLLECTION",
        price: "₹24,990.00",
        oldPrice: "₹60,000.00",
    },
    {
        id: 4,
        image: "https://www.royaloakindia.com/media/catalog/product/l/s/ls_786.png",
        discount: "55% off",
        arrival: "New Arrival",
        title: "Royaloak 1 Man Sitting Man Sculptur...",
        collection: "MALAYSIAN COLLECTION",
        price: "₹1,698.00",
        oldPrice: "₹3,800.00",
    },
];

const Product = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Product;
