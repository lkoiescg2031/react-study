import React, { PureComponent } from 'react';

const { Provider, Consumer } = React.createContext({});

export { Consumer };

export default class LoadingProviderWithNewContext extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoading,
    };

    return (
      <div>
        <Provider value={context}>{this.props.children}</Provider>
      </div>
    );
  }
}
