import { ActionTypes } from './types';

export const getAlbumInformation = (id) => ({
  type: ActionTypes.GetAlbumInformation,
  id
});

export const getAlbumInformationSuccess = (payload) => ({
  type: ActionTypes.GetAlbumInformationSuccess,
  payload
});

export const destroyAlbumInformation = (payload) => ({
  type: ActionTypes.DestroyAlbumInformation,
  payload
});
