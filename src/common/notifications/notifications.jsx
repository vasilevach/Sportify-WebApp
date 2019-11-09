// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Notification from './notification';
import './notifications.scss';

type Props = {
};

function Notifications({ genericNotifications }: Props) {
  return (
    <div className="notifications">
      {
        genericNotifications.map((genericNotification) => (
          <Notification
            notification={genericNotification}
            key={genericNotification.notification.id}
          />
        ))
      }
    </div>
  );
}

Notifications.defaultProps = {
};

const mapStateToProps = (state) => ({
  genericNotifications: state.notifications.notifications
});

export default connect(mapStateToProps)(Notifications);
