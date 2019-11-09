// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Jumbotron } from 'reactstrap';
import { List, PageTitle } from 'src/components';
import * as Actions from './actions';

import "./styles.scss";
import { getImage } from 'src/pages/home/utils';
import { VISUAL_TYPES } from 'src/components/search-tile';
import { ENTITY_TYPES } from 'src/types';

type Props = {
};

function Album({ album, destroyAlbumInformation, getAlbumInformation, match }: Props) {
  useEffect(() => {
    getAlbumInformation(match.params.id);
    return () => {
      destroyAlbumInformation();
    }
  }, []);

  return (
    <div className="album-page">
      <Container>
        <PageTitle
          breadCrumbItems={[
            { label: 'Album', path: '/', active: true }
          ]}
          title=""
        />
      </Container>
      <Container>
        {
          <Jumbotron className="d-flex align-items-center">
            <img className="artist-avatar" src={getImage(album.images)} height="250" />
              <div className="ml-3">
                <h1 className="display-3 font-weight-bold">{album.name}</h1>
                <p className="lead">
                  {album.artists.map((artist) => (artist.name)).join(', ')}
                </p>
                <hr className="my-2" />
                <p className="lead">
                  <Button
                    color="primary"
                    onClick={() => {
                      window.open(
                        album.external_urls.spotify,
                        '_blank' // <- This is what makes it open in a new window.
                      )
                    }}
                  >
                    Listen on Spotify
                  </Button>
                </p>
            </div>
          </Jumbotron>
        }
      </Container>
      <div className="albums-list">
        <Container className="mt-5">
          <List tileView={VISUAL_TYPES.HORIZONTAL} type={ENTITY_TYPES.TRACKS} items={album.tracks.items} />
        </Container>
      </div>
    </div>
  );
}

Album.defaultProps = {
};

export const mapStateToProps = (state) => ({
  album: state.albums,
});

export default connect(mapStateToProps, Actions)(withRouter(Album));
