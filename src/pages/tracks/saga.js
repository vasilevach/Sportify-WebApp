import { call, takeLatest, put } from 'redux-saga/effects';
import { getTrack } from 'src/common/api';
import handleSagaErrors from 'src/common/handle-saga-errors';
import { ActionTypes } from './types';
import * as Actions from './actions';

function* handleGetTrack({ id }) {
  const payload = yield call(getTrack, id);
  yield put(Actions.getTrackInformationSuccess(payload));
}

export default function* init() {
  yield takeLatest(ActionTypes.GetTrackInformation, handleSagaErrors(handleGetTrack));
}
