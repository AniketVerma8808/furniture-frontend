import React from "react";
import ProductItem from "./ProductItem";

const Product = ({ data }) => {
  // console.log("product", data);

  return (
    <div className="container mx-auto p-4">
      <div className="pb-8">
        <h3 className=" text-center text-[30px] text-[rgb(42,40,40)] leading-[45px]">
          All Products
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
        {data?.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
