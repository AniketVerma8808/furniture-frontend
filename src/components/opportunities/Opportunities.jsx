import React from "react";
import imgLeft from "../../assets/image/Opportunities/Opportunitiesleft.webp";
import img1 from "../../assets/image/Opportunities/Opportunitiesright.webp";
import img2 from "../../assets/image/Opportunities/Opportunitiesright.webp";
import img3 from "../../assets/image/Opportunities/Opportunitiesright.webp";
import img4 from "../../assets/image/Opportunities/Opportunitiesright.webp";

// Array for images on the right with names
const images = [
    { id: 1, src: img1, alt: "Opportunity 1", name: "Opportunity 1" },
    { id: 2, src: img2, alt: "Opportunity 2", name: "Opportunity 2" },
    { id: 3, src: img3, alt: "Opportunity 3", name: "Opportunity 3" },
    { id: 4, src: img4, alt: "Opportunity 4", name: "Opportunity 4" },
];

const Opportunities = () => {
    return (
        <div className="max-w-7xl mx-auto py-4 px-4">
            <div className="text-center mb-8">
                <h3 className="font-roboto font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                    Opportunities don't Happen, You Create Them
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Side - Single Image */}
                <div className="flex justify-center">
                    <img
                        src={imgLeft}
                        alt="Opportunity"
                        className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side - 4 Images Mapped in a 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="flex flex-col items-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full rounded-lg shadow-lg"
                            />
                            <p className="mt-2 text-lg text-gray-800">{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
