import React from 'react';
import Slider from 'react-slick';
import ProductItem from '../products/ProductItem';
import { products } from '../products/Product';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
        onClick={onClick}
    >
        <FaChevronRight size={20} />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
        onClick={onClick}
    >
        <FaChevronLeft size={20} />
    </button>
);

const Arrivals = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
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
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 relative">
            <h2 className="text-2xl text-center font-bold text-black mb-4">New Arrivals</h2>
            <div className="py-12 relative">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="px-2">
                            <ProductItem product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Arrivals;
