import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Gravatar from 'react-gravatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class SourceLists extends Component {

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
      category: this.props.source.category
    }
    };
  }
  
/**
 *
 * @returns {component} component
 */
  render() {
    console.log(this.props.source.id);
    return(
      <MuiThemeProvider>
      <div className="row" style={{ marginLeft: 250,marginTop:1 }}>
      <div className="col-lg-3 col-md-6" style={{ marginTop:75 }}>
                  <div className="panel panel-green mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-building-o fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="">{this.props.source.name}</div>
                          <div>{this.props.source.category.capitalize()}</div>
                        </div>
                      </div>
                    </div>
                    <a href={this.props.source.url}>
                      <div className="panel-footer">
                        <span className="pull-left">Visit Source</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </a>
                  </div>
                </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
