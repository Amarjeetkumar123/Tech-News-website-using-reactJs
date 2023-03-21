import React from "react";
import { useGlobalContext } from "./Contextapi";
import "./App.css";
const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((currPost) => {
          const { title, author, objectID, url, num_comments } = currPost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-btn">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
