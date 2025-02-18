import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, setIndividualBlog } from "../redux/blogSlice";
import { useParams } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import Loader from "../components/loader/Loader";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blogs, individual, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    if (!blogs.length) {
      dispatch(fetchBlogs()); // Fetch blogs if not already available
    } else {
      dispatch(setIndividualBlog(id)); // Set individual blog from fetched list
    }
  }, [id, dispatch, blogs]);

  if (loading)
    return (
      <>
      <div className="flex items-center justify-center h-screen">
          <Loader size={5} color={"gray"}  />
      </div>
      </>
    );
  if (!individual) return <p>Blog not found</p>;
  // console.log(individual)

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
      {/* <h1>{individual.title}</h1>
      <p>{individual.content}</p> */}
      <div className="container mx-auto  py-8 px-4 sm:px-6 lg:px-8">
        {/* Blog Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 pb-2 mb-4 text-start">
          {individual.title}
        </h1>

        {/* Blog Metadata */}
        <p className="text-sm sm:text-base text-gray-600 flex items-center mb-4">
          <FaRegCalendarAlt className="mr-2 ml-1" />{" "}
          {formatDate(individual.postedOn)}
        </p>

        {/* Blog Image */}
        <img
          src={individual.image}
          alt={individual.title}
          className="w-full rounded-lg max-h-[500px] object-cover mb-6 shadow-md"
        />

        {/* Blog Description */}
        <p className="text-sm sm:text-[14px] text-gray-800 leading-relaxed">
          {individual.description}
        </p>
      </div>
    </>
  );
};

export default BlogDetails;
