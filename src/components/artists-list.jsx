// @flow
import * as React from 'react';
import history from 'src/history';

type Props = {
};

function ArtistsList({ artists }: Props) {
  return (
    <p className="text-muted font-10 mb-3">
      {artists.map((artist, i) => {
        const comma = i !== 0 ? ", " : "";
        return (
          <span key={artist.id} className="cursor-pointer" onClick={() => history.push(`/artists/${artist.id}`)}>
            {comma}{artist.name}
          </span>
        )
      })}
    </p>
  );
}

ArtistsList.defaultProps = {
};

export default ArtistsList;
