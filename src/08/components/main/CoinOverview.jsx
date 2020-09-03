import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

export default class CoinOverview extends PureComponent {
  render() {
    const coinList = [
      { name: '비트코인', code: 'BTX', priceLabel: 4216000 },
      { name: '이더리움', code: 'ETH', priceLabel: 216000 },
      { name: '두잇코인', code: 'DOI', priceLabel: 30000 },
    ];
    return (
      <>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          {coinList.map((val, idx) => (
            <CoinDashlet
              key={`coin_${idx}`}
              name={val.name}
              code={val.code}
              priceLabel={val.priceLabel}
            />
          ))}
        </InlineList>
      </>
    );
  }
}
