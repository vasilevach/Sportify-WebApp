// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from 'src/pages/login';
import Home from 'src/pages/home';
import Artist from 'src/pages/artists';
import Track from 'src/pages/tracks';
import Album from 'src/pages/albums';
import Playlist from 'src/containers/playlist/playlist';
import { PlaylistContext } from './contexts';
import * as LoginActions from './pages/login/actions';
import * as PlaylistActions from './containers/playlist/actions';
import { isUserAuthenticated } from '../src/pages/login';
import Notifications from 'src/common/notifications/notifications';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/assets/app.scss';

type AppProps = {};

class App extends Component<AppProps> {
  constructor(props) {
    super(props);
    if (window.location.hash) {
      this.props.loginSuccess();
    }
  }

  render() {
    const authenticated = isUserAuthenticated();
    const hasPlaylist = Object.keys(this.props.playlist).length;

    return (
      <div className={classnames("app", hasPlaylist && "playlist")}>
        <Notifications />
        {/* This is bet done by routing, but this app is simple enough to not need one */}
        <Switch>
          {authenticated || (
            <>
            <Route exact path="/">
              <Redirect to="/auth" />
            </Route>
            <Route exact path="/auth">
              <Login />
            </Route>
            </>
          )}
          {authenticated && (
            <PlaylistContext.Provider value={this.props.addToPlaylistInformation}>
              <>
                <Route exact path="/auth">
                  <Redirect to="/" />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/artists/:id">
                  <Artist />
                </Route>
                <Route exact path="/tracks/:id">
                  <Track />
                </Route>
                <Route exact path="/albums/:id">
                  <Album />
                </Route>
              </>
            </PlaylistContext.Provider>
          )}
        </Switch>
        {authenticated && (<Playlist />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist
});

export default connect(mapStateToProps, { ...LoginActions, ...PlaylistActions })(App);
