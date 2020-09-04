import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../../../doit-ui/Heading';
import Button from '../../../doit-ui/Button';
import Card from '../../../doit-ui/Card';
import InlineList from '../../../doit-ui/InlineList';
import Text from '../../../doit-ui/Text';

import { Consumer as Modal } from '../../../doit-ui/Modal/context';
import { TRADE_COIN_MODAL } from '../../constants/modals';
import Spacing from '../../../doit-ui/Spacing';

export default class CoinDashlet extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    priceLabel: PropTypes.number,
  };
  render() {
    const { name, code, priceLabel } = this.props;
    return (
      <Modal>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name} ({code})
              <Spacing left={1}>
                <Text>{priceLabel}</Text>
              </Spacing>
            </Heading>
            <InlineList spacingBetween={1}>
              <Button
                primary
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, {
                    type: 'buy',
                    name,
                    code,
                    price: priceLabel,
                  })
                }
              >
                매도
              </Button>
              <Button
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, {
                    type: 'sell',
                    name,
                    code,
                    price: priceLabel,
                  })
                }
              >
                매수
              </Button>
            </InlineList>
          </Card>
        )}
      </Modal>
    );
  }
}
