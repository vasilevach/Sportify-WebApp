// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import { Header, Tile, List } from 'src/components';
import ArtistsList from 'src/components/artists-list';
import { PlaylistContext } from 'src/contexts';
import { getImage } from './utils';
import * as Actions from './actions';

import "./styles.scss";
import history from 'src/history';

type Props = {
};

function Home({ searchResults, search }: Props) {
  useEffect(() => {
    // I decided to always start with some search:
    // 1. If that was the real deal, probably a good thing would be to show user's last search, so lets assume it
    // 2. Because of Optimistic UI :)
    // 3. Because Sabrina is awesome and should get more recognition :)
    search('Sabrina Claudio');
  }, []);
  const { artists, albums, tracks } = searchResults;

  const getTopHit = () => {
    if(Boolean(artists.items.length)) return { hit: 'artists', ...artists.items[0] };
    if(Boolean(albums.items.length)) return { hit: 'albums', ...albums.items[0] };
    if(Boolean(tracks.items.length)) return { hit: 'tracks', ...tracks.items[0] };
    return { hit: false }
  };

  const topResult = () => {
    const { id, images, name, hit, type } = getTopHit();
    return (
      <>
        <h3>Top Result</h3>
        <Tile id={id} type={hit} images={images} name={name} hit={hit} />
      </>
    )
  };

  const topTracks = (
    <>
      <h3 className="mb-3">Top tracks</h3>
      {tracks.items.map((track, index) => {
        const { id, album, name } = track;

        if (index >= 3) {
          return null;
        }

        return (
          <PlaylistContext.Consumer>
            {(playlistActions) => (
              <Row key={id} className="my-1">
                <Col sm="12" className="d-flex">
                  <div className="cover">
                    <img className="track-oval-image" src={getImage(album.images)} height="64" />
                    <i className="mdi mdi-play-speed small circled" onClick={() => playlistActions(track)} />
                  </div>
                  <div className="ml-2">
                    <h5 className="cursor-pointer" onClick={() => history.push(`tracks/${id}`)}>{name}</h5>
                    <ArtistsList artists={track.artists} />
                  </div>
                </Col>
              </Row>
            )}
          </PlaylistContext.Consumer>
        )
      })}
    </>
  );

  return (
    <div className="home-page">
      <Header onSearch={search} />
      {
        searchResults && (
          <div className="search-results py-3">
            <Container>
              <Row>
                <Col md="6">
                  {getTopHit().hit && topResult()}
                </Col>
                <Col md="6">
                  {Boolean(tracks.items.length) && topTracks}
                </Col>
              </Row>
              {Object.keys(searchResults).map((type) => (
                <Row key={type}>
                  <Col sm="12">
                    {Boolean(searchResults[type].items.length) && (
                      <List type={type} items={searchResults[type].items} />
                    )}
                  </Col>
                </Row>
              ))}
            </Container>
          </div>
        )
      }
    </div>
  );
}

Home.defaultProps = {
};

const mapStateToProps = (state) =>({
  searchResults: state.home.searchResults
});

export default connect(mapStateToProps, Actions)(Home);
