import React, { Component } from "react";
// import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let fetched_data = await data.json();
    this.setState({
      articles: fetched_data.articles,
      totalResults: fetched_data.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    this.updateNews();
  }
  handle_on_prev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handle_on_next = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pagesize)
    ) {
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top Headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://media.istockphoto.com/id/1197831888/vector/male-hand-holding-megaphone-with-breaking-news-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=4CvdND_C8H3AxDMlEAZ8j9oagSvlmMcNHlrVoqoc9KQ="
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        <div className="d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handle_on_prev}
            disabled={this.state.page <= 1}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handle_on_next}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
