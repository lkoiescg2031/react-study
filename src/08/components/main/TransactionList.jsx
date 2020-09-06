import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilterContrainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionPaginationContrainer from '../../containers/main/TransactionPaginationContainer';
import TransactionTable from './TransactionTable';

export default class TransactionList extends PureComponent {
  static defaultProps = {
    transactions: [],
  };

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContrainer />
        </Card>
        <Card>
          <TransactionTable
            transactions={transactions}
            isLoading={loading}
          />
        </Card>
        <TransactionPaginationContrainer />
      </div>
    );
  }
}
