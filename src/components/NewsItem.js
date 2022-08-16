import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card my-2">
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2022/08/14/1600x900/asteroid_(pixabay)_1639115875543_1660482199686_1660482199686.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>
            <span className="badge badge-pill badge-secondary bg-primary">
              {source}
            </span>
          </p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-primary btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
