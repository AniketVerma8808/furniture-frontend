import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to="/blogdetails/:id" className="text-red-500 font-semibold mt-3 inline-block">
          Read More
        </Link>
      </div>
    </div>
   </>
  )
}

export default BlogCard
