import { Cookies } from 'react-cookie';

export const getUserToken = () => {
  const cookies = new Cookies();
  const user = cookies.get('user');
  if (!user) {
    return false;
  }
  const { access_token } = user;
  return access_token;
};

export const isUserAuthenticated = () => Boolean(getUserToken());

export const setSession = (jwt) => {
  const cookies = new Cookies();
  if (jwt) cookies.set('user', JSON.stringify(jwt), { path: '/' });
  else cookies.remove('user', { path: '/' });
};

export const removeSession = () => {
  const cookies = new Cookies();
  cookies.remove('user', { path: '/' });
};
