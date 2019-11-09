// @flow
import { combineReducers } from 'redux';
import notifications from 'src/common/notifications/reducer';
import home from 'src/pages/home/reducer';
import artist from 'src/pages/artists/reducer';
import track from 'src/pages/tracks/reducer';
import albums from 'src/pages/albums/reducer';
import playlist from 'src/containers/playlist/reducer';

export default combineReducers({
  notifications,
  home,
  artist,
  track,
  albums,
  playlist
});
