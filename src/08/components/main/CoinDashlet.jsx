import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../../../doit-ui/Heading';
import Button from '../../../doit-ui/Button';
import Card from '../../../doit-ui/Card';
import InlineList from '../../../doit-ui/InlineList';
import Text from '../../../doit-ui/Text';

export default class CoinDashlet extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    priceLabel: PropTypes.string,
  };
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Card vertical={4} horizontal={4}>
        <Heading level={4}>
          {name}
          <Text>{priceLabel}</Text>
        </Heading>
        <InlineList spacingBetween={1}>
          <Button primary small>
            매도
          </Button>
          <Button small>매수</Button>
        </InlineList>
      </Card>
    );
  }
}
