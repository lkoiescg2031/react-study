import React, { PureComponent } from 'react';

import Input from '../04/InputWithStyles';
import { Consumer } from './FormContext';

export default class FormConsumerExample extends PureComponent {
  render() {
    const { name, ...otherProps } = this.props;
    return (
      <Consumer>
        {({ values, errors, onChange }) => (
          <Input
            {...otherProps}
            name={name}
            onChange={onChange}
            value={values[name]}
            errorMessage={errors[name]}
          />
        )}
      </Consumer>
    );
  }
}
