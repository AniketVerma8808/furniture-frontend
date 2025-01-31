import React from 'react';
import Slider from 'react-slick';
import CategoriesItem from './CategoriesItem';
import { FaSofa } from 'react-icons/fa';
import { FaChair } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaCouch } from 'react-icons/fa';
import { FaStorage } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';

const CategoriesSlider = () => {
    const categories = [
        { icon: <FaSofa />, name: "Sofas" },
        { icon: <FaChair />, name: "Chairs" },
        { icon: <FaBed />, name: "Beds" },
        { icon: <FaTable />, name: "Tables" },
        { icon: <FaCouch />, name: "Couches" },
        { icon: <FaStorage />, name: "Storage" },
        { icon: <FaTshirt />, name: "Furnishings" },
        { icon: <FaTv />, name: "TV Units" },
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-white mb-4">Shop By Categories</h2>

            {/* Slider Component */}
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <CategoriesItem key={index} icon={category.icon} name={category.name} />
                ))}
            </Slider>
        </div>
    );
};

export default CategoriesSlider;
