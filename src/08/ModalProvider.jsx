import createProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL, REGISTER_USER_MODAL } from './constants/modals';
import TradeCoinPageContainer from './containers/main/TradeCoinPageContainer';
import RegisterPage from './containers/signup/RegisterPageContainer';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPageContainer,
  [REGISTER_USER_MODAL]: RegisterPage,
});
