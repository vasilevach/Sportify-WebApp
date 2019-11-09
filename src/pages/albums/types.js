export const ActionTypes = {
  GetAlbumInformation: 'spotify-app/pages/artists/GET_ALBUM',
  GetAlbumInformationSuccess: 'spotify-app/pages/artists/GET_ALBUM_SUCCESS',
  DestroyAlbumInformation: 'spotify-app/pages/artists/DESTROY_ALBUM_INFORMATION'
};

export const defaultState = {
  artists: [],
  external_urls: {
    spotify: ''
  },
  images: [],
  name: '',
  tracks: {
    items: []
  }
};
