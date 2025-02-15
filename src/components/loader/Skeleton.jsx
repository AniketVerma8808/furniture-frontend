import React from 'react'

const Skeleton = () => {
  return (
    <>
       <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-white shadow-lg p-4 animate-pulse"></div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        {/* Header */}
        <div className="w-full max-w-4xl bg-white shadow-md h-16 mb-6 animate-pulse"></div>
        
        {/* Skeleton Card */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 flex flex-col items-center animate-pulse">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skeleton
