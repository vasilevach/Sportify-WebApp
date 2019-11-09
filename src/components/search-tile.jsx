// @flow
import * as React from 'react';
import classnames from 'classnames';
import { Card, CardBody } from 'reactstrap';
import ArtistsList from 'src/components/artists-list';
import { getImage } from 'src/pages/home/utils';
import history from 'src/history';
import { ENTITY_TYPES } from 'src/types';
import { PlaylistContext } from 'src/contexts';

export const VISUAL_TYPES = {
  CONDENSED: 'condensed',
  HORIZONTAL: 'horizontal'
};

type Props = {
};

function Tile({ artists, id, images, name, hit, type, tileView, item }: Props) {
  const isCondensed = tileView === VISUAL_TYPES.CONDENSED;
  const isHorizontal = tileView === VISUAL_TYPES.HORIZONTAL;
  const isTrack = type === ENTITY_TYPES.TRACKS;

  return (
    <Card className="mt-3">
      <CardBody className={isHorizontal ? "d-flex align-items-center" : ""}>
        <PlaylistContext.Consumer>
          {(playlistActions) => (
            <div className="cover">
              <img className={classnames('avatar', tileView, type)} src={getImage(images)} />
              {isTrack && (<i className="mdi mdi-play-speed" onClick={() => playlistActions(item)} />)}
            </div>
          )}
        </PlaylistContext.Consumer>
        <div className={isHorizontal ? "ml-2" : ""}>
          <div className={classnames(`my-3 ${isCondensed ? 'truncate' : ''}`)}>
            <h5 className="m-0 cursor-pointer" onClick={() => history.push(`/${type}/${id}`)}>{name}</h5>
          </div>
          {hit && (<div className="badge">{hit}</div>)}
          {artists && (<ArtistsList artists={artists} />)}
        </div>
      </CardBody>
    </Card>
  );
}

Tile.defaultProps = {
};

export default Tile;
