import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="w-full pb-6 sm:pb-8 md:pb-12">
      <img src={image} alt="Banner" className="w-full h-full  object-cover" />
    </div>
  );
};

export default Banner;
