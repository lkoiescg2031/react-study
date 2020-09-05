import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  requestTransactionList,
  setFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionSearchFilter);
