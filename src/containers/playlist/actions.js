import { ActionTypes } from 'src/containers/playlist/types';

export const getPlaylistInformation = () => ({
  type: ActionTypes.GetPlaylistInformation
});

export const addToPlaylistInformation = (payload) => ({
  type: ActionTypes.AddToPlaylistInformation,
  payload
});

export const updatePlaylist = (payload) => ({
  type: ActionTypes.UpdatePlaylist,
  payload
});

export const destroyPlaylist = () => ({
  type: ActionTypes.DestroyPlaylist
});
