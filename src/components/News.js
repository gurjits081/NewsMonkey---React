import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArtciles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArtciles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    document.title = `${capitalizeFirstLetter(props.category)}  - NewsMonkey`;
  };

  useEffect(() => {
   updateNews();
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1)
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: "35px 0px" }}>
        NewsMonkey - Top Headlines
      </h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 150) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          {" "}
          &larr; Previous
        </button>
        <button
          disabled={
            page + 1 >
            Math.ceil(totalResults / props.pageSize)
          }
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          {" "}
          &rarr; Next
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
