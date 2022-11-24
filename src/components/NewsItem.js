import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
          {source.name}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "216px", width: "413px" }} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-primary btn-sm">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;