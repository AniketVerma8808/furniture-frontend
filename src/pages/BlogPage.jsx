import React, { useEffect } from "react";
import BlogCard from "../components/blogs/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/blogSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);
  console.log("leatst blogs", blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  {
    loading && <p className="text-center text-gray-500">Loading...</p>;
  }
  {
    error && <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Latest Blogs</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
