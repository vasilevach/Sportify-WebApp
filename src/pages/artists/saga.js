import { call, takeLatest, put } from 'redux-saga/effects';
import { getArtist, getArtistAlbums } from 'src/common/api';
import handleSagaErrors from 'src/common/handle-saga-errors';
import { ActionTypes } from './types';
import * as Actions from './actions';

function* handleGetArtist({ id }) {
  const profile = yield call(getArtist, id);
  const albums = yield call(getArtistAlbums, id);
  yield put(Actions.getArtistInformationSuccess({
    profile,
    albums
  }));
}

export default function* init() {
  yield takeLatest(ActionTypes.GetArtistInformation, handleSagaErrors(handleGetArtist));
}
