import React from 'react';

const Banner = ({image}) => {
    return (
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[200px] pb-4">
            <img
                src={image}
                alt="Banner"
                className="w-full h-full  object-cover"
            />
        </div>
    );
};

export default Banner;
