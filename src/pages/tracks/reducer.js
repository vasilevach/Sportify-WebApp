import { ActionTypes, defaultState } from './types';

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GetTrackInformationSuccess:
      return action.payload;
    case ActionTypes.DestroyTrackInformation:
      return defaultState;

    default:
      return state;
  }
}

export default homeReducer;
