import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Option extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { value, label, disabled } = this.props;

    return (
      <option value={value} disabled={disabled}>
        {label || value}
      </option>
    );
  }
}
