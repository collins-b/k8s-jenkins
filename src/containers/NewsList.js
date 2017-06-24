import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/News';
import NewsLists from '../components/news/NewsDisplay';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
    // let { dispatch } = this.props
    // this.props.fetchNews();
    // dispatch(fetchNews)
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
    console.log(this.props.fetchNews(),'jhhfrtdr')
    const dispatch  = this.props
    return (
      <ul className="list-group" >
      <p style={{marginLeft: 99}}>jfjhjh gjhjgh hjghj</p>
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
        