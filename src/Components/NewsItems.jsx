import React from "react";
import newsimg from "../assets/news.jpeg";
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        style={{ height: "200px", width: "325px" }}
        src={src ? src : newsimg}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Breaking News: In a surprising turn of events, scientists have made a groundbreaking discovery that could revolutionize renewable energy..."}
        </p>
        <a href={url} className="btn btn-primary">
        Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
