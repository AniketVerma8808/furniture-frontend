import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductItem from '../products/ProductItem';

const RelatedProduct = ({ currentProductCategory }) => {
    const { products, currentProduct } = useContext(ProductContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (products.length && currentProduct) {
            const filteredProducts = products.filter((product) => {
                return product?.category === currentProductCategory && product?.id !== currentProduct?.id;
            });
            console.log("Filtered products:", filteredProducts);

            setRelatedProducts(filteredProducts);
        }
    }, [currentProductCategory, products, currentProduct]);

    console.log("Current Product:", currentProduct);
    console.log("All products:", products);

    return (
        <div className="max-w-7xl mx-auto px-4 relative">
            <h3 className="font-roboto text-center font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProduct;
