import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { TestimonialsService } from "../../services/api.service";

const ArrowButton = ({ direction, onClick }) => {
  const Icon = direction === "next" ? FaChevronRight : FaChevronLeft;
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-3 shadow-lg z-10 hover:bg-gray-200 transition"
      onClick={onClick}
      style={{ [direction === "next" ? "right" : "left"]: 14 }}
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
      console.log("testimonials", response.data);
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
          slidesToShow: reviews.length === 1 ? 1 : 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto pb-12 px-4 md:px-8">
      <h3 className="text-center font-roboto font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
        Customer Reviews
      </h3>
      <Slider {...settings}>
        {reviews.map(({ _id, name, message, image, location, rating }) => (
          <div key={_id} className="px-4 py-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={image}
                alt={name}
                className="rounded-lg h-48 w-full mx-auto mb-4"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 line-clamp-1 mb-4">
                {message}
              </p>{" "}
              {/* Updated to use 'message' */}
              <div className="flex justify-center items-center gap-2">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
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
