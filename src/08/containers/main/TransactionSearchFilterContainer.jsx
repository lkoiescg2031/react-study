import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
//import { setTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  requestTransactionList,
  setFilter,
};

export default connect(null, mapDispatchToProps)(TransactionSearchFilter);
