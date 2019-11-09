import { ActionTypes } from './types';

export const requestLogin = () => ({
  type: ActionTypes.RequestLogin
});

export const loginSuccess = () => ({
  type: ActionTypes.LoginSuccess
});
