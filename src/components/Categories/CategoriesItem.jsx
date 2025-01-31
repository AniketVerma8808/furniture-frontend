import React from 'react';

const CategoriesItem = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-md shadow-lg text-white">
            <div className="text-3xl mb-2">
                {icon}
            </div>
            <span className="text-sm">{name}</span>
        </div>
    );
};

export default CategoriesItem;
