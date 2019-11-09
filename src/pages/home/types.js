export const ActionTypes = {
  Search: 'spotify-app/pages/SEARCH',
  SearchSuccess: 'spotify-app/pages/SEARCH_SUCCESS'
};

const defaultSearchItem = {
  href: '',
  items: [],
  limit: 10,
  next: '',
  offset: 5,
  previous: '',
  total: 0
};

export const defaultState = {
  searchResults: {
    albums: { ...defaultSearchItem },
    artists: { ...defaultSearchItem },
    tracks: { ...defaultSearchItem }
  }
};
