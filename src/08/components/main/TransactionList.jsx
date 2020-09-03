import React, { PureComponent } from 'react';
import Api from '../../Api';

import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilterContrainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';

export default class TransactionList extends PureComponent {
  static defaultProps = {
    transactions: [],
    setTransactionList: () => {},
  };

  componentDidMount() {
    Api.get('/transactions').then(({ data }) =>
      this.props.setTransactionList(data),
    );
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Heading level={3}>거래현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContrainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}
