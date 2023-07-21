import { useEffect, useState } from "react";
import Blog from "./Blog";
const Blogs = () => {
  let [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/v1/blog")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container mb-5">
      <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","gap":"25px"}}>
        {postData.map((post,index) => {
          return (
            <Blog key={index} post={post}/>
         );
        })}
      </div>
    </div>
  );
};

export default Blogs;
