// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Jumbotron } from 'reactstrap';
import { List, PageTitle } from 'src/components';
import * as Actions from './actions';

import "./styles.scss";
import { getImage } from 'src/pages/home/utils';
import { ENTITY_TYPES } from 'src/types';

type Props = {
};

function Artist({ albums, destroyArtistInformation, profile, getArtistInformation, match }: Props) {
  useEffect(() => {
    getArtistInformation(match.params.id);
    return () => {
      destroyArtistInformation();
    }
  }, []);

  return (
    <div className="artist-page">
      <Container>
        <PageTitle
          breadCrumbItems={[
            { label: 'Artist', path: '/', active: true }
          ]}
          title=""
        />
      </Container>
      <Container>
        {
          <Jumbotron className="d-flex align-items-center">
            <img className="artist-avatar" src={getImage(profile.images)} height="250" />
              <div className="ml-3">
                <h1 className="display-3 font-weight-bold">{profile.name}</h1>
                <p className="lead">
                  {Number(profile.followers.total).toLocaleString()} followers
                </p>
                <hr className="my-2" />
                <p className="lead">
                  <Button
                    color="primary"
                    onClick={() => {
                      window.open(
                        profile.external_urls.spotify,
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
          <List type={ENTITY_TYPES.ALBUMS} items={albums.items} />
        </Container>
      </div>
    </div>
  );
}

Artist.defaultProps = {
};

export const mapStateToProps = (state) => ({
  profile: state.artist.profile,
  albums: state.artist.albums,
});

export default connect(mapStateToProps, Actions)(withRouter(Artist));
