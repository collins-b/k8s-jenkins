import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Gravatar from 'react-gravatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class PolLists extends Component {

/**
 *
 * @param {*} props
 */
constructor(props) {
    super(props);
    this.state = {
      source:{
      id: this.props.source.id,
      url: this.props.source.url,
      name: this.props.source.name,
      category: this.props.source.category,
      description: this.props.source.description
    }
    };
  }
  
/**
 *
 * @returns {component} component
 */
  render() {
    return(
      <MuiThemeProvider>
      <div className="row" style={{ marginLeft: 250,marginTop:1 }}> 
      <Card>
    <CardHeader
      title={this.props.source.name}
      subtitle={this.props.source.category.capitalize()}
      style={{ marginTop:60 }}
    />
    <CardText>
     {this.props.source.description}
    </CardText>
    <CardActions>
      <a href={this.props.source.url} target="_blank"><FlatButton label="Visit Source" /></a>
      <FlatButton label="Share" />
    </CardActions>
  </Card>
  </div>
</MuiThemeProvider>
    )
  }
}
