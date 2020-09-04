import { connect } from 'react-redux';
import TrageCoinPage from '../../components/main/TradeCoinPage01';
import { createTransaction } from '../../actions/transactionActions';

export default connect(null, { createTransaction })(TrageCoinPage);
