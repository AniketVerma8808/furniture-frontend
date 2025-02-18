import React from "react";

const Skeleton = ({ cardCount }) => {
  const columns = cardCount >= 4 ? 3 : cardCount >= 2 ? 2 : 1;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Skeleton Cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-${columns} lg:grid-cols-3 xl:grid-cols-4 gap-4`}
      >
        {Array.from({ length: cardCount }).map((_, index) => (
          <div key={index} className="animate-pulse space-y-4">
            <div className="bg-gray-200 h-48 w-full rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
