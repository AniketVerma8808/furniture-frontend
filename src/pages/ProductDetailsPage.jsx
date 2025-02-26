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
    <div className="container mx-auto px-4 py-12">
      {/* Tabs Navigation */}
      <div className="flex flex-col md:flex-row gap-3 pb-2">
        {["productFeatures", "moreInfo", "ratingsReviews"].map((tab) => (
          <div key={tab} className="w-full md:w-auto">
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`py-2 px-4 w-48 text rounded-lg transition-all   ${
                activeTab === tab
                  ? "bgColor text-white shadow-md scale-100"
                  : "text-gray-500 bg-white"
              }`}
            >
              {tab === "productFeatures" && "Product Features"}
              {tab === "moreInfo" && "More Information"}
              {tab === "ratingsReviews" && "Ratings & Reviews"}
            </button>

            <div
              className={`md:hidden ${activeTab === tab ? "block" : "hidden"}`}
            >
              <div className="py-4  rounded-lg  mt-4">
                {tab === "productFeatures" && (
                  <div>
                    <h3 className="text-xl text-gray-800">Product Features</h3>
                    <ul className="mt-2 list-disc pl-5 text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tab === "moreInfo" && (
                  <div>
                    <h3 className="text-xl text-gray-800">More Information</h3>
                    <p className="mt-2 text-gray-600">{product.moreInfo}</p>
                  </div>
                )}
                {tab === "ratingsReviews" && (
                  <div>
                    <h3 className="text-xl text-gray-800">Ratings & Reviews</h3>
                    {product.reviews.length === 0 ? (
                      <p className="mt-2 text-gray-600">
                        No reviews yet. Be the first to review!
                      </p>
                    ) : (
                      product.reviews.map((review, index) => (
                        <div key={index} className="border-b py-2">
                          <h4 className="text-gray-800">{review.user}</h4>
                          <p className="text-gray-600">{review.comment}</p>
                          <div className="flex items-center mt-2">
                            <span className="text-yellow-500">
                              {"★".repeat(review.rating)}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="hidden md:block mt-4">
        {activeTab === "productFeatures" && (
          <div>
            <h3 className="text-xl  text-gray-800">Product Features</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
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
              <p className="mt-2 text-gray-600">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              <div>
                {product.reviews.map((review, index) => (
                  <div key={index} className="border-b py-2">
                    <h4 className="text-gray-800 ">{review.user}</h4>
                    <p className="text-gray-600">{review.comment}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">
                        {"★".repeat(review.rating)}
                      </span>
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
