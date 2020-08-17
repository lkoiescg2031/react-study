import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

export default class ActionComponent01 extends PureComponent {
  static propTypes = {
    setAge: PropTypes.func,
  };
  render() {
    const { setAge } = this.props;
    return (
      <>
        <Button onPress={() => setAge(2, 19)}>
          고유번호 2번 나이 19세로 변경
        </Button>
      </>
    );
  }
}
