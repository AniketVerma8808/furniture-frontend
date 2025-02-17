import React from "react";
import { Link } from "react-router-dom";

const NoProduct = ({ image }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt="No Product" className="w-1/2 md:w-1/4" />
        <Link to={"/"} className="text-xl md:text-3xl font-bold py-8">
          Please Add Some Product
        </Link>
      </div>
    </div>
  );
};

export default NoProduct;
