import { connect } from 'react-redux';

import RegisterPage from '../../components/signup/RegisterPage';
import { createUser } from '../../actions/userActions';
import { userCreateLoadingStateSelector } from '../../selectors/userSelectors';

const mapStateToProps = (state) => ({
  loading: userCreateLoadingStateSelector(state),
});

const mapDispatchToProps = { createUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
