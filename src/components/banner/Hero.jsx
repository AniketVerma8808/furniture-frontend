import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import leftBanner from "../../assets/image/banner/leftbanner.png";
import leftBanner2 from "../../assets/image/banner/leftbanner2.png";
import { useSelector } from "react-redux";

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md z-10 hover:bg-gray-100"
  >
    <FaChevronLeft size={20} />
  </button>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md z-10 hover:bg-gray-100"
  >
    <FaChevronRight size={20} />
  </button>
);

const Hero = () => {
  const { banners } = useSelector((state) => state.home);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Left side images (stacked) - Hidden on Mobile
  const leftImages = [leftBanner, leftBanner2];

  // Right side slider images

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12  gap-4 px-4 md:px-8 py-6">
      {/* Left Side - Hidden on Mobile, Equal Height */}
      <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-4 h-full">
        {leftImages.map((img, index) => (
          <div
            key={index}
            className="bg-gray-200 h-40 lg:h-[165px] xl:h-[250px] 2xl:h-[260px] rounded-lg overflow-hidden "
          >
            <img
              src={img}
              alt={`Left Image ${index + 1}`}
              className="w-full  object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Side - Slider (Full width on mobile, Equal Height) */}
      <div className="col-span-12 md:col-span-8 rounded-lg overflow-hidden relative h-full">
        <Slider {...settings}>
          {banners.map(({ image }, index) => (
            <div key={index} className="h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
