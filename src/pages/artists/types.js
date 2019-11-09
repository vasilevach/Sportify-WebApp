export const ActionTypes = {
  GetArtistInformation: 'spotify-app/pages/artists/GET_ARTIST',
  GetArtistInformationSuccess: 'spotify-app/pages/artists/GET_ARTIST_SUCCESS',
  DestroyArtistInformation: 'spotify-app/pages/artists/DESTROY_ARTIST_INFORMATION'
};

export const defaultState = {
  profile: {
    images: [],
    name: '',
    external_urls: {
      spotify: ''
    },
    followers: {
      total: 0
    }
  },
  albums: {
    items: []
  }
};
