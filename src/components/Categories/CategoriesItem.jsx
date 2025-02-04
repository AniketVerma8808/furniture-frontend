const CategoriesItem = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center p-4 rounded-md shadow-md text-black border border-gray-300 mx-2 transition-all duration-300">
            {/* Icon Section */}
            <div className="text-5xl sm:text-6xl md:text-7xl text-gray-500 text-opacity-60 mb-2">
                {icon}
            </div>

            {/* Category Name */}
            <span className="text-sm sm:text-base font-semibold text-center">{name}</span>
        </div>
    );
};

export default CategoriesItem;
