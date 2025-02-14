import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import reviewImg from '../../assets/image/review/review.jpg';
import reviewImg2 from '../../assets/image/review/review2.jpg';
import reviewImg3 from '../../assets/image/review/review3.jpg';
import reviewImg4 from '../../assets/image/review/review4.jpg';


const reviews = [
    { id: 1, image: reviewImg, text: 'Lorem ipsum dolor sit amet...', rating: 4.5, name: 'John Doe', location: 'New York, USA' },
    { id: 2, image: reviewImg2, text: 'Sed ut perspiciatis unde...', rating: 5.0, name: 'Jane Smith', location: 'California, USA' },
    { id: 3, image: reviewImg3, text: 'Quis autem vel eum iure...', rating: 4.0, name: 'Alice Johnson', location: 'London, UK' },
    { id: 4, image: reviewImg4, text: 'Lorem ipsum dolor sit amet...', rating: 4.5, name: 'John Doe', location: 'New York, USA' },

];

// Memoized Arrow Components
const ArrowButton = ({ direction, onClick }) => {
    const Icon = direction === 'next' ? FaChevronRight : FaChevronLeft;
    return (
        <button
            className="absolute top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
            onClick={onClick}
            style={{ [direction === 'next' ? 'right' : 'left']: 0 }}
        >
            <Icon size={20} />
        </button>
    );
};

const Review = () => {
    const settings = useMemo(() => ({
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowButton direction="next" />,
        prevArrow: <ArrowButton direction="prev" />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    }), []);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <h3 className="text-center font-roboto font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px] mb-8">
                Customer Reviews
            </h3>
            <Slider {...settings}>
                {reviews.map(({ id, image, text, rating, name, location }) => (
                    <div key={id} className="px-4 py-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img src={image} alt={name} className="rounded-lg h-48 w-full mx-auto mb-4" loading="lazy" />
                            <p className="text-sm text-gray-500 mb-4">{text}</p>
                            <div className="flex justify-center items-center gap-2">
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'} />
                                    ))}
                                </div>
                                <span className="font-bold">{rating.toFixed(1)}</span>
                            </div>
                            <p className="text-gray-800 mt-2 font-semibold">{name}</p>
                            <p className="text-gray-500 text-sm">{location}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Review;
