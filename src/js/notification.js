import Notiflix from 'notiflix';

export class Notification {
  static tpNotification = {
    warning: 'WARNING',
    info: 'INFO',
  };

  sendNotification(type, message) {
    switch (type) {
      case Notification.tpNotification.warning:
        Notiflix.Notify.warning(message);
        break;
      case Notification.tpNotification.info:
        Notiflix.Notify.info(message);
        break;
      default:
    }
  }
}
