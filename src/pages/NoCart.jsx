import React from "react";
import { Link } from "react-router-dom";

const NoCart = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center    ">
        <img src="/empty.png" alt="" />
        <Link to={"/"} className="text-xl md:text-3xl font-bold py-8">
          Please Add Some Product
        </Link>
      </div>
    </div>
  );
};

export default NoCart;
