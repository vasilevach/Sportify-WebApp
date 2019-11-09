import { ActionTypes } from './types';

export const getTrackInformation = (id) => ({
  type: ActionTypes.GetTrackInformation,
  id
});

export const getTrackInformationSuccess = (payload) => ({
  type: ActionTypes.GetTrackInformationSuccess,
  payload
});

export const destroyTrackInformation = (payload) => ({
  type: ActionTypes.DestroyTrackInformation,
  payload
});
