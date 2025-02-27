import React, { useState } from "react";

const ProductDetailsPage = () => {
  const product = {
    id: 1,
    title: "Sample Product",
    reviews: [
      { user: "John Doe", rating: 5, comment: "Great product!" },
      { user: "Jane Doe", rating: 4, comment: "Good value for money." },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-[20px] md:text-[24px]  text-[rgb(42,40,40)] leading-[30px] md:leading-[45px] mb-4">
        Ratings & Reviews
      </h3>

      {product.reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      ) : (
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="text-base font-medium text-gray-800">
                {review.user}
              </h4>
              <p className="text-gray-600 text-[14px]">{review.comment}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">
                  {"★".repeat(review.rating)}
                </span>
                <span className="text-gray-500 ml-2">
                  ({review.rating} out of 5)
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
