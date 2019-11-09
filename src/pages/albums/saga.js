import { call, takeLatest, put } from 'redux-saga/effects';
import { getAlbum, getAlbumTracks } from 'src/common/api';
import handleSagaErrors from 'src/common/handle-saga-errors';
import { ActionTypes } from './types';
import * as Actions from './actions';

function* handleGetAlbum({ id }) {
  const payload = yield call(getAlbum, id);
  yield put(Actions.getAlbumInformationSuccess(payload));
}

export default function* init() {
  yield takeLatest(ActionTypes.GetAlbumInformation, handleSagaErrors(handleGetAlbum));
}
