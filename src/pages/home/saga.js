import { call, takeLatest, put } from 'redux-saga/effects';
import { search } from 'src/common/api';
import handleSagaErrors from 'src/common/handle-saga-errors';
import { ActionTypes } from './types';
import * as Actions from './actions';

function* handleSearch({ payload }) {
  const options = {
    market: 'US',
    limit: 4,
    offset: 4
  };

  const response = yield call(search, encodeURI(payload), options);
  yield put(Actions.searchSuccess(response));
}

export default function* init() {
  yield takeLatest(ActionTypes.Search, handleSagaErrors(handleSearch));
}
