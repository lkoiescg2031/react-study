import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from '../actions/routerActions';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

class RouterState extends React.PureComponent {
  static propTypes = {
    setLocation: PropTypes.func,
    location: PropTypes.object,
  };

  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  componentDidUpdate(prevProps, prevState) {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  render() {
    return null;
  }
}

export default compose(
  connect(null, { setLocation }),
  withRouter,
)(RouterState);
