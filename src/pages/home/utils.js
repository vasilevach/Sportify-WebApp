import avatar from './avatar.svg';

export const getImage = (images) => (images && images.length ? images[0].url : avatar);
export const getArtists = (artists) => (
  artists.reduce((acc, cur, i) => {
    const comma = i !== 0 ? "," : "";
    return `${acc}${comma} ${cur.name}`;
  }, '')
);
