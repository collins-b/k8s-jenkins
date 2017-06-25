import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTech } from '../actions/Technology';
import TechLists from '../components/tech/tech';

export class TechList extends Component {
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
    this.props.fetchTech();
  }
  renderTech() {
    if (this.props.tech.length === 0) {
      return(
        <b>No sources available</b>
      )
    }
    return this.props.tech.map((source) => {
      return (
        <TechLists key={source.id} source={source} />
      );
    });
  }

  render() {
    const dispatch  = this.props
    return (
      <ul className="list-group" >
        {this.renderTech()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    tech: state.tech,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    tech: tech
  }, dispatch);
}

export default connect(mapStateToProps, {
  fetchTech
})(TechList);
        