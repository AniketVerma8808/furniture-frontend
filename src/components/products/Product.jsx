import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../../context/ProductContext";

const Product = ({ category }) => {
    const { products, newArrivals, bestSellers, recentlyViewed } =
        useContext(ProductContext);

    // Determine the product list based on the category
    let productList;
    switch (category) {
        case "newArrivals":
            productList = newArrivals;
            break;
        case "bestSellers":
            productList = bestSellers;
            break;
        case "recentlyViewed":
            productList = recentlyViewed;
            break;
        default:
            productList = products;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {productList.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Product;
