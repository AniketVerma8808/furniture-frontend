import React from "react";
import Slider from "react-slick";
import CategoriesItem from "./CategoriesItem";
import { MdOutlineTableRestaurant, MdOutlineWeekend, MdOutlineStorage, MdCheckroom, MdTv } from "react-icons/md";
import { RiArmchairLine, RiSofaLine } from "react-icons/ri";
import { LuBedSingle } from "react-icons/lu";

const CategoriesSlider = () => {
    const categories = [
        { icon: <RiSofaLine />, name: "Sofas" },
        { icon: <RiArmchairLine />, name: "Chairs" },
        { icon: <LuBedSingle />, name: "Beds" },
        { icon: <MdOutlineTableRestaurant />, name: "Tables" },
        { icon: <MdOutlineWeekend />, name: "Couches" },
        { icon: <MdOutlineStorage />, name: "Storage" },
        { icon: <MdCheckroom />, name: "Furnishings" },
        { icon: <MdTv />, name: "TV Units" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        adaptiveHeight: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    arrows: false,
                },
            },
        ],
    };


    return (
        <div className="max-w-7xl mx-auto px-2 md:px-0 py-8">
            <h3 className="font-roboto text-center font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px] mb-6">
                Shop By Categories
            </h3>
            <div className="py-12">
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
