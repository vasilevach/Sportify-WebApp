import { ActionTypes, defaultState } from './types';

function playlistReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.UpdatePlaylist:
      return action.payload;
    case ActionTypes.DestroyPlaylist:
      return defaultState;
    default:
      return state;
  }
}

export default playlistReducer;
