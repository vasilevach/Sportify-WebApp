import { ActionTypes } from './types';

export const getArtistInformation = (id) => ({
  type: ActionTypes.GetArtistInformation,
  id
});

export const getArtistInformationSuccess = (payload) => ({
  type: ActionTypes.GetArtistInformationSuccess,
  payload
});

export const destroyArtistInformation = (payload) => ({
  type: ActionTypes.DestroyArtistInformation,
  payload
});
