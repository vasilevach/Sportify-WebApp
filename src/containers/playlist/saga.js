import { select, takeLatest, put } from 'redux-saga/effects';
import { ActionTypes } from './types';
import * as Actions from './actions';

const LOCAL_STORAGE_ITEM_NAME = 'playlist';

function* handleGetPlaylistInformation() {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME);
    if (serializedState === null) {
      return;
    }

    yield put(Actions.updatePlaylist(JSON.parse(serializedState)));
  } catch (e) {
    console.log(e);
  }
}

function* handleAddToPlaylistInformation({ payload }) {
  const { playlist } = yield select();

  if (playlist[payload.id]) {
    // maybe do a remove? Whatever the needs are,
    // in this case we only add new items to playlist
    return;
  }
  const newPlaylist = {
    ...playlist,
    [payload.id]: payload
  };

  try {
    const serializedState = JSON.stringify(newPlaylist);
    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, serializedState);
  } catch (e) {
    console.log(e);
  }

  yield put(Actions.updatePlaylist(newPlaylist));
}

export default function* init() {
  yield takeLatest(ActionTypes.GetPlaylistInformation, handleGetPlaylistInformation);
  yield takeLatest(ActionTypes.AddToPlaylistInformation, handleAddToPlaylistInformation);
}
