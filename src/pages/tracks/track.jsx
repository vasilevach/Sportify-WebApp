// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Jumbotron } from 'reactstrap';
import { List, PageTitle } from 'src/components';
import * as Actions from './actions';

import "./styles.scss";
import { ENTITY_TYPES } from 'src/pages/home/types';
import { getImage } from 'src/pages/home/utils';

type Props = {
};

function Track({ track, destroyTrackInformation, getTrackInformation, match }: Props) {
  useEffect(() => {
    getTrackInformation(match.params.id);
    return () => {
      destroyTrackInformation();
    }
  }, []);

  const { album, artists, external_urls, name } = track;

  return (
    <div className="track-page">
      <Container>
        <PageTitle
          breadCrumbItems={[
            { label: 'Track', path: '/', active: true }
          ]}
          title=""
        />
      </Container>
      <Container>
        {
          <Jumbotron className="d-flex align-items-center">
            <img className="track-image" src={getImage(album.images)} height="250" />
              <div className="ml-3">
                <h1 className="display-3 font-weight-bold">{name}</h1>
                <p className="lead">
                  {artists.map((artist) => (artist.name)).join(', ')}
                </p>
                <hr className="my-2" />
                <p className="lead">
                  <Button
                    color="primary"
                    onClick={() => {
                      window.open(
                        external_urls.spotify,
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
    </div>
  );
}

Track.defaultProps = {
};

export const mapStateToProps = (state) => ({
  track: state.track
});

export default connect(mapStateToProps, Actions)(withRouter(Track));
