import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitics } from '../actions/Politics';
import PolLists from '../components/politics/Politics';

export class PoliticsList extends Component {
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
    this.props.fetchPolitics();
  }
  renderPolitics() {
    if (this.props.politics.length === 0) {
      return(
        <b>No sources available</b>
      )
    }
    return this.props.politics.map((source) => {
      return (
        <PolLists key={source.id} source={source} />
      );
    });
  }

  render() {
    const dispatch  = this.props
    return (
      <ul className="list-group" >
        {this.renderPolitics()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    politics: state.politics,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    politics: politics
  }, dispatch);
}

export default connect(mapStateToProps, {
  fetchPolitics
})(PoliticsList);
        