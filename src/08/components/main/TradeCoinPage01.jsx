import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';
import Form from '../../../doit-ui/Form';

import { Consumer as Modal } from '../../../doit-ui/Modal/context';

export default class TradeCoinPage01 extends PureComponent {
  static propTypes = {
    createTransaction: PropTypes.func,
  };
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const { name, code, createTransaction } = this.props;
    const totalPrice = values.currentPrice * values.amount;
    const datetime = new Date().toString();
    const formValues = {
      code,
      name,
      totalPrice,
      ...values,
      datetime,
    };
    createTransaction(formValues, closeModal);
  }

  render() {
    const { name, code, price, type } = this.props;
    const typeName = type === 'sell' ? '판매' : '구매';
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={(values) => this.handleSubmit(values, closeModal)}
            initValues={{ currentPrice: price }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {`${name}(${code})`} {typeName}
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="금액"
                      value={values['currentPrice']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input
                      name="amount"
                      label="수량"
                      value={values['amount']}
                      onChange={onChange}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary>{typeName}</Button>
                    <Button onPress={closeModal}>취소</Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}
