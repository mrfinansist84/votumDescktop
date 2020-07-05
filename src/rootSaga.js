import { all } from 'redux-saga/effects';
import {VotingProtocolsSagaWatcher} from './containers/VotingPage';
import {FilteredProtocolsSagaWatcher} from './containers/ProtocolsPage';
import {FilteredProposalsSagaWatcher} from './containers/ProposalsPage';
import {CreateProposalSagaWatcher} from './containers/CreateProposalsPage';
import {CreateProtocolSagaWatcher} from './containers/CreateProtocolsPage';
import {TenantsProfileSagaWatcher} from './containers/TenantsProfile';
import {CreateTenantsProfileSagaWatcher} from './containers/CreateTenantProfile';

export default function* rootSaga() {
  yield all([
    VotingProtocolsSagaWatcher(),
    FilteredProtocolsSagaWatcher(),
    FilteredProposalsSagaWatcher(),
    CreateProposalSagaWatcher(),
    CreateProtocolSagaWatcher(),
    TenantsProfileSagaWatcher(),
    CreateTenantsProfileSagaWatcher()
  ]);
}
