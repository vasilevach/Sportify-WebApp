import { call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { setSession } from './utils';
import history from 'src/history';

function* handleLoginSuccess() {
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if (item) {
        const parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  yield call(setSession, hash);
  yield call(history.push, '/');
}

export default function* init() {
  yield takeLatest(ActionTypes.LoginSuccess, handleLoginSuccess);
}
