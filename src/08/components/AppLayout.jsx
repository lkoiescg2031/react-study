import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  css,
  withStylesPropTypes,
} from '../../doit-ui/withStyles';
import AppNav, { HEIGHT } from './AppNav';

class AppLayout extends PureComponent {
  static propTypes = {
    ...withStylesPropTypes,
    children: PropTypes.node,
  };

  render() {
    const { children, styles } = this.props;

    return (
      <div {...css(styles.wrapper)}>
        <AppNav />
        <div {...css(styles.body)}>{children}</div>
      </div>
    );
  }
}

export default withStyles(({ unit }) => ({
  wrapper: {
    marginTop: HEIGHT,
  },
  body: {
    padding: unit * 4,
  },
}))(AppLayout);
