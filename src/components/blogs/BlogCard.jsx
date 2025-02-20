import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setIndividualBlog } from "../../redux/blogSlice";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();

  const handleChange = ({ _id }) => {
    dispatch(setIndividualBlog(_id));
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 p-2">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover "
        />
        <div className="p-4">
          <p className="text-sm text-gray-600  flex items-center">
            <FaRegCalendarAlt className="mr-2 ml-1" />{" "}
            {formatDate(blog.postedOn)}
          </p>
          <h2 className="text-[16px]  mt-2">{blog.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-4 mt-2">
            {blog.description}
          </p>
          <Link
            to={`/blogdetails/${blog._id}`}
            onClick={() => handleChange(blog)}
            className="text-red-500  text-sm mt-3 inline-block"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
