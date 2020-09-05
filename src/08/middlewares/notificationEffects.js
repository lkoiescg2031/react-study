import {
  SHOW_NOTIFICATION,
  showMessage,
  hideMessage,
} from '../actions/notificationActions';
import { debounce } from '../../02/debounce';

import { KEY, LIFECYCLE } from 'redux-pack';

const debounceRunner = debounce((action) => action(), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, payload, meta } = action;

  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      const { errorMessage } = payload.response
        ? payload.response.data
        : {};
      store.dispatch(
        showMessage(`${error} (Server: ${errorMessage})`, true),
      );
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    debounceRunner(hide);
  }

  return nextRunner(action);
};
