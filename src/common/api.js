import { getUserToken } from 'src/pages/login';
import ApiError from './api-error';

export const request = async (
  endpoint: string, method: string, body: object = undefined, authorisation = true
) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(authorisation ? {
      Authorization: `Bearer ${getUserToken()}`
    } : {})
  };

  const response = await fetch(process.env.REACT_APP_API_HOST + endpoint, {
    headers,
    method,
    body: body instanceof FormData ? body : JSON.stringify(body)
  });

  if (!response.ok) {
    return response.json().then((res) => {
      let { message, status } = res.error;
      if (!message) {
        message = 'Oops, something went wrong. Please try again later';
      }

      throw new ApiError(status, message);
    });
  }

  return response.json();
};

export const search = async (search, options) => request(
  `search?q=${search}&type=track%2Cartist%2Calbum&limit=${options.limit}&market=${options.market}&offset=${options.offset}`,
  'GET'
);
export const getArtist = async (id) => request(`artists/${id}`, 'GET');
export const getArtistAlbums = async (id) => request(`artists/${id}/albums`, 'GET');
export const getTrack = async (id) => request(`tracks/${id}?market=US`, 'GET');
export const getAlbum = async (id) => request(`albums/${id}?market=US`, 'GET');
export const getAlbumTracks = async (id) => request(`albums/${id}/tracks?market=US`, 'GET');
