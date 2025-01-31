import React from 'react';
import Slider from 'react-slick';
import CategoriesItem from './CategoriesItem';
import { GiSofa } from 'react-icons/gi';
import { MdChair } from 'react-icons/md';
import { MdBed } from 'react-icons/md';
import { MdTableRestaurant } from 'react-icons/md';
import { MdOutlineWeekend } from 'react-icons/md';
import { MdOutlineStorage } from 'react-icons/md';
import { MdCheckroom } from 'react-icons/md';
import { MdTv } from 'react-icons/md';

const CategoriesSlider = () => {
    const categories = [
        { icon: <GiSofa />, name: "Sofas" },
        { icon: <MdChair />, name: "Chairs" },
        { icon: <MdBed />, name: "Beds" },
        { icon: <MdTableRestaurant />, name: "Tables" },
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
        slidesToShow: 8,
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
        <div className="max-w-7xl mx-auto  py-8">
            <h2 className="text-2xl text-center font-bold text-black mb-4">Shop By Categories</h2>
            <div className='py-12'>
                {/* Slider Component */}
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <CategoriesItem key={index} icon={category.icon} name={category.name} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CategoriesSlider;
