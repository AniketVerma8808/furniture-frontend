import React from "react";
import Slider from "react-slick";
import CategoriesItem from "./CategoriesItem";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineTableRestaurant, MdOutlineStorage } from "react-icons/md";
import { TbLamp2 } from "react-icons/tb";
import { BiTable } from "react-icons/bi";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  adaptiveHeight: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
  ],
};

const CategoriesSlider = () => {
  const categories = [
    { icon: <LuBedSingle />, name: "BEDS" },
    { icon: <MdOutlineStorage />, name: "MATTRESSES" },
    { icon: <MdOutlineTableRestaurant />, name: "WARDROBES" },
    { icon: <TbLamp2 />, name: "DECOR" },
    { icon: <BiTable />, name: "SIDE TABLES" },
  ];

  return (
    <div className="container mx-auto px-2 md:px-8 ">
      <h3 className=" text-center text-[20px] md:text-[30px] lg:text-[36px] text-[rgb(42,40,40)] leading-[45px]">
        Shop By Categories
      </h3>
      <div className="py-6 sm:py-8 md:py-12">
        {/* Slider Component */}
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="flex justify-center">
              <CategoriesItem icon={category.icon} name={category.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoriesSlider;
