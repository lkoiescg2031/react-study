import { connect } from 'react-redux';
import Notification from '../../components/main/Notification';

const mapStateToProps = (state) => {
  const { hasError, errorMessage } = state.transactions;
  return { hasError, errorMessage };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
