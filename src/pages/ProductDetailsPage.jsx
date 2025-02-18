import React, { useState } from "react";

const ProductDetailsPage = () => {

    const product = {
        id: 1,
        title: "Sample Product",
        features: [
            "Feature 1: High quality material",
            "Feature 2: Waterproof",
            "Feature 3: Lightweight",
        ],
        moreInfo: "This is additional information about the product.",
        reviews: [
            { user: "John Doe", rating: 5, comment: "Great product!" },
            { user: "Jane Doe", rating: 4, comment: "Good value for money." },
        ],
    };

    const [activeTab, setActiveTab] = useState("productFeatures");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container min-h-screen mx-auto p-4">
            {/* Tabs Navigation */}
            <div className="flex space-x-4">
                <button
                    onClick={() => handleTabClick("productFeatures")}
                    className={`py-2 px-4 ${activeTab === "productFeatures" ? "  bgColor text-white rounded-lg" : "text-gray-500"}`}
                >
                    Product Features
                </button>
                <button
                    onClick={() => handleTabClick("moreInfo")}
                    className={`py-2 px-4 ${activeTab === "moreInfo" ? " bgColor text-white rounded-lg" : "text-gray-500"}`}
                >
                    More Information
                </button>
                <button
                    onClick={() => handleTabClick("ratingsReviews")}
                    className={`py-2 px-4 ${activeTab === "ratingsReviews" ? " bgColor text-white rounded-lg" : "text-gray-500"}`}
                >
                    Ratings & Reviews
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "productFeatures" && (
                    <div>
                        <h3 className="text-xl  text-gray-800">Product Features</h3>
                        <ul className="mt-2 list-disc pl-5 text-gray-600">
                            {product.features.map((feature, index) => (
                                <li key={index} className="mb-2">{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === "moreInfo" && (
                    <div>
                        <h3 className="text-xl  text-gray-800">More Information</h3>
                        <p className="mt-2 text-gray-600">{product.moreInfo}</p>
                    </div>
                )}

                {activeTab === "ratingsReviews" && (
                    <div>
                        <h3 className="text-xl  text-gray-800">Ratings & Reviews</h3>
                        {product.reviews.length === 0 ? (
                            <p className="mt-2 text-gray-600">No reviews yet. Be the first to review!</p>
                        ) : (
                            <div>
                                {product.reviews.map((review, index) => (
                                    <div key={index} className="border-b py-2">
                                        <h4 className="text-gray-800 ">{review.user}</h4>
                                        <p className="text-gray-600">{review.comment}</p>
                                        <div className="flex items-center mt-2">
                                            <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailsPage;
