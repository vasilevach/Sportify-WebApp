import { ActionTypes, defaultState } from './types';

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GetArtistInformationSuccess:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.DestroyArtistInformation:
      return defaultState;

    default:
      return state;
  }
}

export default homeReducer;
