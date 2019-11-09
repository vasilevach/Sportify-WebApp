// @flow
import { all } from 'redux-saga/effects';
import login from 'src/pages/login/saga';
import home from 'src/pages/home/saga';
import artists from 'src/pages/artists/saga';
import track from 'src/pages/tracks/saga';
import album from 'src/pages/albums/saga';
import playlist from 'src/containers/playlist/saga';

export default function* rootSaga(getState: any): any {
  yield all([
    login(), home(), artists(), track(), album(), playlist()
  ]);
}
