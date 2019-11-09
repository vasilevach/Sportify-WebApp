import { ActionTypes } from './types';

export const search = (payload) => ({
  type: ActionTypes.Search,
  payload
});

export const searchSuccess = (payload) => ({
  type: ActionTypes.SearchSuccess,
  payload
});
