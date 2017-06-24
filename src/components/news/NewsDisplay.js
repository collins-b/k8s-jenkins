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

/**
 *
 */
export default class NewsLists extends Component {

/**
 *
 * @param {*} props
 */
constructor(props) {
    super(props);
    this.state = {
      article:{
      author: this.props.article.author,
      source: this.props.article.source,
      sortBy: this.props.article.sortBy,
      articles: this.props.article.articles,
      title: this.props.article.title,
      description: this.props.article.description,
      url: this.props.article.url
    }
    };
  }
  /**
 *
 * @param {*} event
 * @returns {object} object
 */
  state = {
    open: false,
  };
  state = {
      value: 1,
    };

 handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleOpenDelete = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
/**
 *
 * @returns {component} component
 */
  render() {
    console.log(this.props, 'component')
    
    return(
      <MuiThemeProvider>
      <div className="row" style={{ marginLeft: 250,marginTop:15 }}>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{marginTop:80}}>
      <Gravatar email={this.props.article.author} style={{ float: 'left' }} size={50} rating="pg" default="identicon" className="CustomAvatar-image" />
        <CardHeader
          title={this.state.article.author}
          subtitle={this.state.article.title }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label=''
          />
        </CardText>
        <CardMedia
          expandable={true}
        >
        </CardMedia>
        <CardTitle title={this.state.article.sortBy}  expandable={true} />
        <CardText expandable={true}>
          {this.state.article.description}
          <Link to={this.state.article.url}>Read More</Link>
        </CardText>
      </Card>
      </div>
      </MuiThemeProvider>
    )
  }
}
