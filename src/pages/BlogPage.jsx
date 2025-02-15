import React from 'react'

const BlogPage = () => {
  return (
    <>
       <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    </>
  )
}

export default BlogPage
