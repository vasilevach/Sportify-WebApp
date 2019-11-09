import ApiError from '../api-error';
import { NOTIFICATION_ADD_GENERIC, NOTIFICATION_REMOVE_GENERIC } from './constants';

export const addGenericNotification = (notification) => ({
  type: NOTIFICATION_ADD_GENERIC,
  payload: { notification }
});

export const addGenericNotificationFromError = (error: ApiError) => ({
  type: NOTIFICATION_ADD_GENERIC,
  payload: {
    notification: {
      id: +new Date(),
      type: 'error',
      message: error.message
    }
  }
});

export const removeGenericNotification = (id) => ({
  type: NOTIFICATION_REMOVE_GENERIC,
  payload: { id }
});
