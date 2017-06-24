import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewsList from '../../containers/NewsList';

/**
 * HomePage Component
 */
class HomePage extends React.Component {

  render() {
    console.log(this.props, 'props')
    const hidden = {
      display: 'none'
    };

    return (
      <div>
        <main className="mdl-layout__content mdl-color--grey-100" style={{ marginLeft: 235, marginTop: 50 }}>
          <div className="mdl-grid demo-content">
            <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-primary mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-newspaper-o fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge">0</div>
                          <div>News Articles</div>
                        </div>
                      </div>
                    </div>
                    <a href="/">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-green mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-building-o fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge">0</div>
                          <div>News Sources</div>
                        </div>
                      </div>
                    </div>
                    <Link to="/">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-yellow mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-desktop fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge"></div>
                          <div>Technology</div>
                        </div>
                      </div>
                    </div>
                    <Link to="/">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-success">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-thermometer fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge"></div>
                          <div>Health</div>
                        </div>
                      </div>
                    </div>
                    <Link href="#">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
                  </div>
                </div>
                
         
              </div>
            </div>
          </div>
        </main>
        <div className="col-md-12">
          <p style={hidden}>
          <NewsList />
          </p>
        </div>
      </div>
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
    news,
  }, dispatch);
}

module.exports = connect(mapStateToProps)(HomePage);
// module.exports = HomePage;
