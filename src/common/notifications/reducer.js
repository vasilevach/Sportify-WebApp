import { NOTIFICATION_ADD_GENERIC, NOTIFICATION_REMOVE_GENERIC } from './constants';

function notificationReducer(state = { notifications: [] }, action) {
  switch (action.type) {
    case NOTIFICATION_ADD_GENERIC:
      return {
        ...state,
        notifications: state.notifications.concat(action.payload)
      };
    case NOTIFICATION_REMOVE_GENERIC:
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.notification.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default notificationReducer;
