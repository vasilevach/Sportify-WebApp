// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import * as Actions from 'src/containers/playlist/actions';

import "src/containers/playlist/styles.scss";
import classnames from 'classnames';
import { getImage } from 'src/pages/home/utils';

type Props = {
};

function Playlist({ playlist, getPlaylistInformation }: Props) {
  useEffect(() => {
    getPlaylistInformation();
  }, []);

  const playlistItemsKeys = Object.keys(playlist);

  if (!playlistItemsKeys.length) {
    return <></>
  }

  return (
    <div className="playlist">
      <Container className="py-3">
        <h4>Here is your local playlist</h4>
        <Row className="mt-2">
          {playlistItemsKeys.slice(-5).map((item) => {
            const { album, name } = playlist[item];
            const images = album ? album.images : [];
            return (
              <Col md="2" className="d-flex flex-column align-items-center">
                <img className="playlist-image" src={getImage(images)} />
                <p className="playlist-name py-1">{name}</p>
              </Col>
            )
          })}
          <Col
            md="2"
            className="view-all d-flex flex-column align-items-center"
            onClick={() => alert('Full playlist not supported yet ;)')}
          >
            <i className="mdi mdi-playlist-music" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Playlist.defaultProps = {
};

const mapStateToProps = (state) => ({
  playlist: state.playlist
});

export default connect(mapStateToProps, Actions)(Playlist);
