import React, { useContext } from 'react';
import Slider from 'react-slick';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductItem from '../products/ProductItem';
import { ProductContext } from '../../context/ProductContext';

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

const RecentViewed = () => {
    const { bestSellers } = useContext(ProductContext);


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
        <div className="max-w-7xl mx-auto pt-12 px-4 relative">
            <h3 className="font-roboto text-center font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                Recently Viewed
            </h3>
            <div className="py-12 relative">
                {bestSellers && bestSellers.length > 0 ? (
                    <Slider {...settings}>
                        {bestSellers.map((product) => (
                            <div key={product.id} className="px-2">
                                <ProductItem product={product} label="Trending" />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center text-gray-600">No best sellers available at the moment.</p>
                )}
            </div>
        </div>
    );
};




export default RecentViewed
