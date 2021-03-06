import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { css, withStyles } from '../withStyles';

class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { styles, children } = this.props;
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.contrainer)}>
            <Card vertical={2} horizontal={2}>
              {children}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(() => ({
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
  },

  wrapper: {
    verticalAlign: 'middle',
  },

  contrainer: {
    margin: '40px auto 0px',
    width: 700,
  },
}))(Modal);
