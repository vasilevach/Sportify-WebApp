import { call, put, take } from 'redux-saga/effects';
import { removeSession } from 'src/pages/login';
import history from 'src/history';

import { addGenericNotificationFromError } from './notifications/actions';

function handleSagaErrors(saga) {
  return function* callSaga(action) {
    // a generic loader will go great here!
    // yield put(loadingStart());

    try {
      yield call(saga, action);
    } catch (error) {
      yield put(addGenericNotificationFromError(error));
      if (error.status === 401) {
        // refresh the page and delete the cookie:
        // best case: should attempt refresh token, and logout if it doesn't happen
        // but this is a very simple app :)
        removeSession();
        history.push('/auth');
      }
    } finally {
      // yield put(loadingStop());
    }
  };
}

export default handleSagaErrors;
