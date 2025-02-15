import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, setIndividualBlog } from "../redux/blogSlice";
import { useParams } from "react-router-dom";

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

  if (loading) return <p>Loading...</p>;
  if (!individual) return <p>Blog not found</p>;

  return (
    <div>
      <h1>{individual.title}</h1>
      <p>{individual.content}</p>
    </div>
  );
};

export default BlogDetails;
