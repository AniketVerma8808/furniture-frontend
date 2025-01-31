const CategoriesItem = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center p-4 rounded-md shadow-lg text-black border border-gray-300 mx-2">
            <div className="text-7xl text-gray-500 text-opacity-40 mb-2">
                {icon}
            </div>
            <span className="text-sm">{name}</span>
        </div>
    );
};

export default CategoriesItem;
