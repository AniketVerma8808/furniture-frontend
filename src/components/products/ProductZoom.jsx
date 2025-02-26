import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductZoom = ({ images }) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const settingsBig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  const settingsThumbnails = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const handleThumbnailClick = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <div className="container mx-auto px-4 mt-6">
      {/* Main Image Section */}
      <div className="bg-white custom-shadow rounded-lg overflow-hidden mb-6">
        <Slider {...settingsBig} ref={zoomSliderBig}>
          {images?.map((image, index) => (
            <div key={index} className="flex justify-center">
              <InnerImageZoom
                src={image}
                zoomType="click"
                zoomScale={1.5}
                className="w-full object-cover rounded-lg"
                alt={`Product Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnail Slider */}
      <div className="mt-4">
        <Slider {...settingsThumbnails} ref={zoomSlider} className="space-x-3">
          {images?.map((image, index) => (
            <div
              key={index}
              className="p-2 border-2 border-gray-200 rounded-lg cursor-pointer transition-all "
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductZoom;
