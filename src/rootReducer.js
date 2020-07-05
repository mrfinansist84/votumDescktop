import { combineReducers } from 'redux';
import votingPageReducer from './containers/VotingPage/reducer';
import protocolsPageReducer from './containers/ProtocolsPage/reducer';
import proposalsPageReducer from './containers/ProposalsPage/reducer';
import mainPageReducer from './containers/MainPage';
import tenantsProfileReducer from './containers/TenantsProfile';

export default combineReducers({
  votingPageReducer,
  protocolsPageReducer,
  proposalsPageReducer,
  mainPageReducer,
  tenantsProfileReducer
  });