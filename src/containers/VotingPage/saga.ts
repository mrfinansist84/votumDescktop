import { takeLatest, call, put, delay } from 'redux-saga/effects';
import VotingPageService from './service';
import { votingProtocolsSuccess, votingAction } from './actions';
import { VOTING_PROTOCOLS_REQUEST, VOTING_ACTION } from './constants';
import { calcDocumentAmount } from '../MainPage/actions';
import { Protocol } from './interface';
import { handleRequestError, controlLoading } from '../MainPage/actions';

export function* votingProtocolsSaga() {
    try {
        yield put(controlLoading(true));
        const votingProtocols: Protocol[] = yield call(VotingPageService.getVotingProtocols);
        yield put(votingProtocolsSuccess(votingProtocols));
        yield put(calcDocumentAmount(votingProtocols ? votingProtocols.length: 0))
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* votingActionSaga(action: ReturnType<typeof votingAction>) {
    const {cardId, votingActionParam, userId, collection} = action;
    try {
        yield put(controlLoading(true));
        yield call(VotingPageService.setVotingResult,  cardId, votingActionParam, userId, collection)
        yield delay(500);
        const votingProtocols: Protocol[] = yield call(VotingPageService.getVotingProtocols);
        yield put(votingProtocolsSuccess(votingProtocols));
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* VotingProtocolsSagaWatcher() {
    yield takeLatest(VOTING_PROTOCOLS_REQUEST, votingProtocolsSaga);
    yield takeLatest(VOTING_ACTION, votingActionSaga);
}
