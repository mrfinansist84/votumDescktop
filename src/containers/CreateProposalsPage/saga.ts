import { takeLatest, call, put } from 'redux-saga/effects';
import CreateProposalPageService from './service';
import { createProposalSuccess, createProposalRequest } from './actions';
import { CREATE_PROPOSALS_REQUEST } from './constants';
import { handleRequestError, handleRequestSuccess, controlLoading } from '../MainPage/actions';
import translater from '../../global/translation.json';

export function* createProposalSaga(data: ReturnType<typeof createProposalRequest>) {
    const { proposal, userId } = data;
    try {
        yield put(controlLoading(true));
       yield call(CreateProposalPageService.createProposal, proposal, userId);
       yield put(createProposalSuccess());
       yield put(handleRequestSuccess(translater.createProposalsPage.successBanner));
       yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* CreateProposalSagaWatcher() {
    yield takeLatest(CREATE_PROPOSALS_REQUEST, createProposalSaga);
}
