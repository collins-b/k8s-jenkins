import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Gravatar from 'react-gravatar';

class SideBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      source:{
      // id: this.props.source,
      // name: this.props.source.name,
      // description: this.props.source.description,
      // url: this.props.source.url,
      // category: this.props.source.category,
      // language: this.props.source.language,
      // country: this.props.source.country
    }
    };
  }
  render(){
    console.log(this.props.source,'sidebarn')
    const email = 'dummyemail.email.com';
  return (
      <MuiThemeProvider>
    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">theHype - The Global Epicenter News Platform</span>
          <div className="mdl-layout-spacer" />
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          </div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i className="material-icons">more_vert</i>
          </button>
        </div>
      </header>

      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header className="demo-drawer-header">
        <Gravatar className="demo-avatar" email={email} size={100} style={{ float: 'centre' }}  rating="pg" default="identicon" />
          <div className="demo-avatar-dropdown">
            <span>Welcome!</span>
            <div className="mdl-layout-spacer"></div>
            <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i className="material-icons" role="presentation">arrow_drop_down</i>
            </button>
          </div>
        </header>
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <Link to="/" className="mdl-navigation__link"><i className="fa fa-home fa-1x" />&nbsp; Home</Link>
          <Link to="/news" className="mdl-navigation__link"><i className="fa fa-clock-o fa-1x" />&nbsp; Latest News</Link>
        </nav>
      </div>
    </div>
   </MuiThemeProvider>
  );
}
}
export default SideBar;
