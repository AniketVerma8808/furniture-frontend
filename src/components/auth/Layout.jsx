import React from 'react'
import loginBanner from '../../assets/image/banner/loginBanner.png'
import Slider from "react-slick";
import { useSelector } from 'react-redux';


const Layout = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,

    };
    const { banners } = useSelector((state) => state.home);

    return (
        <div className="  p-4 ">
            {/* Left side Banner */}
            <div className="hidden lg:block h-full">
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
            {children}
        </div>
    )
}

export default Layout