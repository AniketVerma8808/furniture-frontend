import React from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import reviewImg from '../../assets/image/review/review.jpg'
import reviewImg2 from '../../assets/image/review/review2.jpg'
import reviewImg3 from '../../assets/image/review/review3.jpg'
import reviewImg4 from '../../assets/image/review/review4.jpg'
import reviewImg5 from '../../assets/image/review/review5.jpg'
import reviewImg6 from '../../assets/image/review/review6.jpg'
import reviewImg7 from '../../assets/image/review/review7.jpg'




const reviews = [
    {
        id: 1,
        image: reviewImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        rating: 4.5,
        name: 'John Doe',
        location: 'New York, USA'
    },
    {
        id: 2,
        image: reviewImg2,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
        rating: 5.0,
        name: 'Jane Smith',
        location: 'California, USA'
    },
    {
        id: 3,
        image: reviewImg3,
        text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        rating: 4.0,
        name: 'Alice Johnson',
        location: 'London, UK'
    },
    {
        id: 4,
        image: reviewImg4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        rating: 4.5,
        name: 'John Doe',
        location: 'New York, USA'
    },
    {
        id: 5,
        image: reviewImg5,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
        rating: 5.0,
        name: 'Jane Smith',
        location: 'California, USA'
    },
    {
        id: 6,
        image: reviewImg6,
        text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        rating: 4.0,
        name: 'Alice Johnson',
        location: 'London, UK'
    },

];



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



const Review = () => {
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
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black">Customer Reviews</h2>
            </div>
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} className="px-4 py-4">
                        <div className="bg-white p-6 rounded-lg custom-shadow text-center">
                            <img src={review.image} alt={review.name} className="rounded-lg h-48 w-full mx-auto mb-4" />
                            <p className="text-sm text-gray-500 mb-4">{review.text}</p>
                            <div className="flex justify-center items-center gap-2">
                                <div className="flex gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} className={index < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                                    ))}
                                </div>
                                <span className="font-bold">{review.rating}</span>
                            </div>
                            <p className="text-gray-800 mt-2 font-semibold">{review.name}</p>
                            <p className="text-gray-500 text-sm">{review.location}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Review
