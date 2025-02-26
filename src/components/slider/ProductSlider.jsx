import React, { useContext } from "react";
import Slider from "react-slick";
import ProductItem from "../products/ProductItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute  md:top-[100px] lg:top-[100px] xl:top-[128px] right-8 transform -translate-y-1/2 bg-gray-100 text-black p-2 lg:p-[9px]  shadow-lg z-10 hover:bg-gray-200 transition hidden md:block"
    onClick={onClick}
  >
    <FaChevronRight size={16} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute  md:top-[100px] lg:top-[100px] xl:top-[128px] left-8 transform -translate-y-1/2 bg-gray-100 text-black p-2 lg:p-[9px] shadow-lg z-10 hover:bg-gray-200 transition hidden md:block"
    onClick={onClick}
  >
    <FaChevronLeft size={16} />
  </button>
);

const ProductSlider = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 md:px-8 relative">
      <h3 className="text-center text-[20px] md:text-[30px] lg:text-[36px] text-[rgb(42,40,40)] leading-[45px]">
        {title}
      </h3>
      <div className="py-8 md:py-12 relative">
        <Slider {...settings}>
          {data?.map((product) => (
            <div key={product._id} className="md:px-8 px-1">
              <ProductItem product={product} label="New Arrival" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
