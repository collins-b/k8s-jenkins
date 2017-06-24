import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/News';
import NewsLists from '../components/news/NewsDisplay';
export class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      source: '',
      sortBy: '',
      articles: '',
    };
  }

  componentDidMount() {
    this.props.fetchNews();
  }
  renderArticles() {
    if (this.props.news.length === 0) {
      return(
        <b>No news available</b>
      );
    }
    return this.props.news.map((article) => {
      return (
        <NewsLists key={article.status} article={article} />
      );
    });
  }

  render() {
    const dispatch  = this.props
    return (
      <ul className="list-group" >
        {this.renderArticles()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    news: news
  }, dispatch);
}

export default connect(mapStateToProps, {
  fetchNews
})(NewsList);
        