import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TestimonialsService } from "../../services/api.service";
import Skeleton from "../loader/Skeleton";
import Rating from "../rating/Rating";

const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === "next" ? FaChevronRight : FaChevronLeft;
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-[9px] shadow-lg z-10 hover:bg-gray-200 transition hidden md:block"
      onClick={onClick}
      style={{
        [direction === "next" ? "right" : "left"]: "30px",
        top: "45%",
        transform: "translateY(-50%)",
      }}
    >
      <Icon size={20} />
    </button>
  );
};

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      setLoading(true);
      const response = await TestimonialsService();
      // console.log("testimonials", response.data);
      setReviews(response.data.data);
      setLoading(false);
    };

    getTestimonials();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: reviews.length > 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
    slidesToShow: reviews.length === 1 ? 1 : 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: reviews.length === 1 ? 1 : 2, // 2 slides on medium screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // 1 slide on small screens
        },
      },
    ],
  };

  if (loading) {
    return <Skeleton cardCount={3} />;
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <h3 className="text-center text-[20px] md:text-[30px] lg:text-[36px] text-[rgb(42,40,40)] leading-[45px] ">
        Customer Reviews
      </h3>

      <Slider {...settings} className="py-8 md:py-12">
        {reviews.map(({ _id, name, message, image, location, rating }) => (
          <div key={_id} className="px-0 py-4 sm:px-4 md:px-8 relative">
            <div className="bg-white p-4 pb-6 md:p-6 rounded-lg shadow-lg border border-gray-200 transition duration-300 text-center flex flex-col justify-between h-full">
              {/* Image Section */}
              <div className="h-68">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-center rounded-lg cursor-pointer md:mb-4 mb-2"
                  loading="lazy"
                />
              </div>

              {/* Message Section */}
              <p className="text-sm text-gray-600 md:mb-4 mb-2 overflow-hidden line-clamp-2 leading-relaxed">
                {message}
              </p>

              {/* Rating Section */}
              <div className="flex justify-center items-center gap-2 md:mb-4 mb-2">
                <Rating rating={rating} />
              </div>

              {/* Name and Location Section */}
              <p className="text-gray-900 font-medium text-base tracking-wide">
                {name}
              </p>
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
