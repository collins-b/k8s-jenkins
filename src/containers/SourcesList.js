import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSources } from '../actions/Sources';
import SourceLists from '../components/sources/Sources';

export class SourceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      country: '',
    };
  }

  componentDidMount() {
    this.props.fetchSources();
  }
  renderSources() {
    if (this.props.sources.length === 0) {
      return(
        <b>No sources available</b>
      )
    }
    return this.props.sources.map((source) => {
      return (
        <SourceLists key={source.id} source={source} />
      );
    });
  }

  render() {
    console.log(this.props,'contso')
    const dispatch  = this.props
    return (
      <ul className="list-group" >
        {this.renderSources()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    sources: state.sources,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sources: sources
  }, dispatch);
}

export default connect(mapStateToProps, {
  fetchSources
})(SourceList);
        