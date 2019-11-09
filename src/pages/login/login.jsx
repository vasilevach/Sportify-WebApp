// @flow
import React from 'react';
import { Button } from 'reactstrap';

import './styles.scss';

type Props = {
};

function Login({ }: Props) {
  const requestLogin = () => {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    // This value is in .env.local which is not in git for obvious reasons
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URL;
    const scopes = [
      "user-read-currently-playing",
      "user-read-playback-state",
    ];
    window.location.href =  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login-page">
      <Button color="primary" className="btn-rounded mb-3" onClick={requestLogin}>
        Login to Spotify
      </Button>
    </div>
  );
}

Login.defaultProps = {
};

export default Login;
