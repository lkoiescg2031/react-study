import { connect } from 'react-redux';
import TrageCoinPage from '../../components/main/TradeCoinPage';
import { createTransaction } from '../../actions/transactionPackActions';
import { transactionCreateLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  return { loading: transactionCreateLoadingStateSelector(state) };
};

const mapDispatchToProps = {
  createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrageCoinPage);
