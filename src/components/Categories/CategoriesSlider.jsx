import React from 'react';
import Slider from 'react-slick';
import CategoriesItem from './CategoriesItem';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import { MdOutlineWeekend } from 'react-icons/md';
import { MdOutlineStorage } from 'react-icons/md';
import { MdCheckroom } from 'react-icons/md';
import { MdTv } from 'react-icons/md';
import { RiArmchairLine, RiSofaLine } from 'react-icons/ri';
import { LuBedSingle } from 'react-icons/lu';

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

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6, // Default for larger screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet and up
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480, // Extra small devices
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h3 className="font-roboto text-center font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px] mb-6">
                Shop By Categories
            </h3>
            <div className='py-12'>
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
