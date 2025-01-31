import React, { useRef, useState } from "react";
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useParams } from "react-router-dom";

// Mock product data
const productMock = {
    title: "Sample Product",
    images: [
        "https://www.royaloakindia.com/media/catalog/product/l/s/ls2_201.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500&format=jpeg",
        "https://www.royaloakindia.com/media/catalog/product/l/s/ls_768.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500&format=jpeg",
        "https://www.royaloakindia.com/media/catalog/product/1/_/1_698.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500&format=jpeg",
        "https://www.royaloakindia.com/media/catalog/product/2/_/2_656.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500&format=jpeg",
        "https://www.royaloakindia.com/media/catalog/product/3/_/3_582.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=800&canvas=800:500&format=jpeg",
    ],
};

const ProductZoom = () => {
    const { id } = useParams();

    const [product] = useState(productMock);

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
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
    };

    const handleThumbnailClick = (url, index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            {/* Main Zoom Image Section */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                <Slider {...settingsBig} className="rounded-lg" ref={zoomSliderBig}>
                    {product?.images?.map((image, index) => (
                        <div key={index} className="flex justify-center object-contain h-full w-full">
                            <InnerImageZoom
                                src={image}
                                zoomType="click"
                                zoomScale={1.5}
                                className="w-full object-cover"
                                alt={`Product Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Thumbnail Slider */}
            <div className="mt-6 zoomSliderdetails">
                <Slider {...settingsThumbnails} ref={zoomSlider} className="space-x-4">
                    {product?.images?.map((image, index) => (
                        <div
                            key={index}
                            className="p-2 border-2 border-gray-200 rounded-lg cursor-pointer transition-transform transform "
                            onClick={() => handleThumbnailClick(image, index)}
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
