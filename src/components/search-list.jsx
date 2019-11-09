// @flow
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import Tile from 'src/components/search-tile';
import { ENTITY_TYPES } from 'src/types';
import { VISUAL_TYPES } from 'src/components/search-tile';

type Props = {
  type: ENTITY_TYPES.TRACKS | ENTITY_TYPES.ALBUMS | ENTITY_TYPES.ARTISTS
};

function List({ type, items, tileView }: Props) {
  const isHorizontal = tileView === VISUAL_TYPES.HORIZONTAL;

  const getImagesByEntityType = (item) => {
    if (type === ENTITY_TYPES.ALBUMS) {
      return item.images;
    }

    if (type === ENTITY_TYPES.ARTISTS) {
      return item.images;
    }

    if (type === ENTITY_TYPES.TRACKS) {
      return item.album ? item.album.images : [];
    }

    return [];
  };

  return (
    <>
      <h5 className="mt-2 text-capitalize">{type}</h5>
      <Row className="my-3">
        {items.map((item) => {
          return (
            <Col md={isHorizontal ? 12 : 3} key={item.id}>
              <Tile
                id={item.id}
                type={type}
                images={getImagesByEntityType(item)}
                name={item.name}
                tileView={tileView}
                artists={item.artists}
                item={item}
              />
            </Col>
          )
        })}
      </Row>
    </>
  );
}

List.defaultProps = {
  tileView: VISUAL_TYPES.CONDENSED
};

export default List;
