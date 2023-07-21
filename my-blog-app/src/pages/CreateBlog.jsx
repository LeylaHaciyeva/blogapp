import { useState } from "react";

const CreateBlog = () => {
  const [formdata, setFormData] = useState({
    author: "",
    description: "",
    title: "",
    visitorCount: 0,
    image: "",
  });
  const createBlog = (e) => {
    e.preventDefault();
    setFormData({
      author: e.target.author.value,
      description: e.target.description.value,
      title: e.target.title.value,
      visitorCount: 0,
      image: e.target.image.value
    });
    fetch("http://localhost:8080/v1/blog/create-blog", {
      method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          author: e.target.author.value,
          description: e.target.description.value,
          title: e.target.title.value,
          visitorCount: 0,
          image: e.target.image.value
        })

    })
  };
  return (
    <>
      <h5>Create your great blog</h5>
      <form action="" onSubmit={(e) => createBlog(e)}>
        <div>
          <label htmlFor="blogauthor">author</label>
          <input
            type="text"
            className="blogauthor"
            id="blogauthor"
            name="author"
          />
        </div>
        <div>
          <label htmlFor="blogdesc">desc</label>
          <input
            type="text"
            className="blogdesc"
            id="blogdesc"
            name="description"
          />
        </div>
        <div>
          <label htmlFor="blogtitle">title</label>
          <input
            type="text"
            className="blogtitle"
            id="blogtitle"
            name="title"
          />
        </div>
        {/* <div>
          <label htmlFor="blogvisitorcount">visitor count</label>
          <input
            type="text"
            className="blogvisitorcount"
            id="blogvisitorcount"
            name="visitorCount"
          />
        </div> */}
        <div>
          <label htmlFor="blogimage">image</label>
          <input
            type="text"
            className="blogimage"
            id="blogimage"
            name="image"
          />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
      {formdata.author}
    </>
  );
};

export default CreateBlog;
