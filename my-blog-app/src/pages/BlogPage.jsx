import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  let [singleBlog, setSingleBlog] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/v1/blog/${params.blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleBlog({
          id: data.id,
          author: data.author,
          creationDate: data.creationDate,
          description: data.description,
          title: data.title,
          visitorCount: data.visitorCount,
          image: data.image,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {singleBlog.author}
      <br></br>
      {singleBlog.description}
      <br></br>
      {singleBlog.title}
      <br></br>
      {singleBlog.visitorCount}
      <br></br>
      {singleBlog.creationDate}
      <br></br>
    </>
  );
};

export default BlogPage;
