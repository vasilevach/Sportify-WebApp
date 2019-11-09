import { ActionTypes, defaultState } from './types';

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SearchSuccess:
      return {
        ...state,
        searchResults: action.payload
      };

    default:
      return state;
  }
}

export default homeReducer;
