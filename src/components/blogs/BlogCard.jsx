import React from 'react'
const blogs = [
    {
      id: 1,
      category: "Living room",
      date: "February 11, 2025",
      views: 28,
      title: "The Timeless Appeal of Wooden Sofas: Why Every Home Needs One",
      description:
        "A wooden sofa is the perfect blend of comfort and durability and its raw ability to demand attention. Unlike mass-produced sofas made using...",
      image: "https://example.com/wooden-sofa.jpg",
    },
    {
      id: 2,
      category: "Bedroom",
      date: "February 4, 2025",
      views: 81,
      title: "Wardrobe Designs That Will Help You Start 2025 with a Fresh, Organised Look",
      description:
        "Do you spend the first 5 minutes trying to find your perfect outfit? Are your clothes cramped up in your wardrobe? Or perhaps your wardrobe lacks draw...",
      image: "https://example.com/wardrobe.jpg",
    },
    {
      id: 3,
      category: "Living room",
      date: "January 28, 2025",
      views: 97,
      title: "Recliners: The Best Investment for Your 2025 Relaxation Goals",
      description:
        "Did you know: The global recliner chair market was valued at over $4.2 billion in 2024 and is projected to grow at a steady 5.4% annually, reaching $6.4...",
      image: "https://example.com/recliner.jpg",
    },
  ];
  
const BlogCard = ({ blog }) => {
  return (
   <>
   <div className="bg-white shadow-md rounded-lg overflow-hidden border">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-blue-500 font-semibold">
          In {blog.category} • {blog.date} • Views: {blog.views}
        </p>
        <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
        <a href="#" className="text-red-500 font-semibold mt-3 inline-block">
          Read More
        </a>
      </div>
    </div>
   </>
  )
}

export default BlogCard
