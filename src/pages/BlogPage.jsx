import React, { useEffect } from "react";
import BlogCard from "../components/blogs/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/blogSlice";

const BlogPage = () => {
  const { blogs, loading, error } = useSelector((state) => state.blog);



   console.log( blogs , "fetched blogs from blog component ");


  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl mb-6 text-center"> Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
