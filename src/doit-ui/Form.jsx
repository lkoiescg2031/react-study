import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Modal/context';

const { Provider, consumer } = React.createContext({});

export default class FormProvider extends PureComponent {
  static propTypes = {
    validate: PropTypes.func,
  };

  static defaultProps = {
    initValues: {},
    validate: () => ({}),
  };

  static Consumer = Consumer;
  static getDerivedStateFromProps({ initValues }, prevState) {
    const values =
      initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      errors: {},
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { values, errors } = this.state;
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      this.props.onSubmit(values);
    }
  }

  onChange(name, updatedValue) {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
      }),
      () => this.validate(this.state.values),
    );
  }

  reset() {
    this.setState({ values: {} });
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({
      errors,
    });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors,
          values,
          onChange: this.onChange,
          reset: this.reset,
        }}
      >
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}
