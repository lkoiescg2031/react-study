import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toast from '../../doit-ui/Toast';

export default class Notification extends PureComponent {
  static propTypes = {
    showMessage: PropTypes.bool,
    message: PropTypes.string,
    warning: PropTypes.bool,
  };

  render() {
    const { showMessage, message, warning } = this.props;
    return showMessage && <Toast message={message} warning={warning} />;
  }
}
