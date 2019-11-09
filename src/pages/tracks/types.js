export const ActionTypes = {
  GetTrackInformation: 'spotify-app/pages/artists/GET_TRACK',
  GetTrackInformationSuccess: 'spotify-app/pages/artists/GET_TRACK_SUCCESS',
  DestroyTrackInformation: 'spotify-app/pages/artists/DESTROY_TRACK_INFORMATION'
};

export const defaultState = {
  album: {
    images: []
  },
  artists: [],
  external_urls: {
    spotify: ''
  },
  name: '',
  release_date: ''
};
