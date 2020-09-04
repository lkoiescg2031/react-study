import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../actions/notificationActions';

const initialState = {
  message: '',
  warning: false,
  showMessage: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION: {
      const { message, warning } = payload;
      return {
        ...state,
        showMessage: true,
        message,
        warning,
      };
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        showMessage: false,
        message: '',
      };
    }
    default:
      return state;
  }
};
