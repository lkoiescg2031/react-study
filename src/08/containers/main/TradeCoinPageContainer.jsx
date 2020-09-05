import { connect } from 'react-redux';
import TrageCoinPage from '../../components/main/TradeCoinPage';
import {
  createTransaction,
  CREATE_TRANSACTION,
} from '../../actions/transactionPackActions';
const mapStateToProps = (state) => {
  const { loadingState } = state.transactions;
  const loading = loadingState[CREATE_TRANSACTION];
  return { loading };
};

const mapDispatchToProps = {
  createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrageCoinPage);
