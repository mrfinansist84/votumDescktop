import { takeLatest, call, put, delay } from 'redux-saga/effects';
import ProtocolsPageService from '../ProtocolsPage/service';
import VotingPageService from '../VotingPage/service';
import { filteredProposalsSuccess } from './actions';
import { FILTERED_PROPOSALS_REQUEST, VOTING_PROPOSALS_ACTION } from './constants';
import { SagaProposals } from './interface';
import { handleRequestError, controlLoading } from '../MainPage/actions';

export function* filteredProposalsSaga(data: SagaProposals) {
    const { basicFilterName, advancedFilterName,  advancedFilterValue, userId } = data;
    try {
        yield put(controlLoading(true));
        const filteredProposals = yield call(ProtocolsPageService.getFilteredProtocols, 
            basicFilterName, 
            advancedFilterName, 
            advancedFilterValue,
            'proposals',
            userId);   
        yield put(filteredProposalsSuccess(filteredProposals));
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* votingProposalsActionSaga(action: any) {
    const {cardId, controlName, userId, defenition, filteredParams } = action;
    try {
        yield put(controlLoading(true));
        yield call(VotingPageService.setVotingResult,  cardId, controlName, userId, defenition)
        yield put(controlLoading(false));
        yield delay(500);
        yield filteredProposalsSaga({...filteredParams, userId});
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}; 


export function* FilteredProposalsSagaWatcher() {
    yield takeLatest(FILTERED_PROPOSALS_REQUEST, filteredProposalsSaga);
    yield takeLatest(VOTING_PROPOSALS_ACTION, votingProposalsActionSaga);
}
