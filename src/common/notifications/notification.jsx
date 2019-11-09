// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import * as Actions from './actions';
import { NOTIFICATION_DELAY } from './constants';

class Notification extends React.Component<Props, State> {
  timeout;

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.removeNotification();
    }, NOTIFICATION_DELAY);
  }

  componentWillUnmount() {
    this.removeNotification();
  }

  removeNotification = () => {
    const { removeGenericNotification, notification } = this.props;

    if (this.timeout === undefined) {
      return;
    }

    clearTimeout(this.timeout);
    this.timeout = undefined;
    removeGenericNotification(notification.notification.id);
  };

  render() {
    const { notification } = this.props;

    return (
      <Toast className="notification">
        <ToastHeader>
          <strong className="mr-auto">
            Notification
          </strong>
        </ToastHeader>
        <ToastBody>{notification.notification.message}</ToastBody>
      </Toast>
    );
  }
}

Notification.defaultProps = {
};

export default connect(null, Actions)(Notification);
