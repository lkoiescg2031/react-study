import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

export default class CoinOverview extends PureComponent {
  render() {
    const coinList = [
      { name: '비트코인', priceLabel: '4,216,000원' },
      { name: '이더리움', priceLabel: '216,000원' },
      { name: '두잇코인', priceLabel: '30,000원' },
    ];
    return (
      <>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          {coinList.map((val, idx) => (
            <CoinDashlet
              key={`coin_${idx}`}
              name={val.name}
              priceLabel={val.priceLabel}
            />
          ))}
        </InlineList>
      </>
    );
  }
}
