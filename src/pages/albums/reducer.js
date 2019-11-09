import { ActionTypes, defaultState } from './types';

function albumReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GetAlbumInformationSuccess:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.DestroyAlbumInformation:
      return defaultState;

    default:
      return state;
  }
}

export default albumReducer;
