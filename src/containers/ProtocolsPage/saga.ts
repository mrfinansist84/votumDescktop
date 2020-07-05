import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { SagaProtocols } from './interface';
import ProtocolsPageService from './service';
import { filteredProtocolsSuccess } from './actions';
import { FILTERED_PROTOCOLS_REQUEST, CONTROLS_ACTION } from './constants';
import { handleRequestError, controlLoading } from '../MainPage/actions';

export function* filteredProtocolsSaga(data: SagaProtocols) {
    const { basicFilterName, advancedFilterName, advancedFilterValue, userId } = data;
    try {
       yield put(controlLoading(true));
        const filteredProtocols = yield call(ProtocolsPageService.getFilteredProtocols, 
            basicFilterName, 
            advancedFilterName, 
            advancedFilterValue,
            'protocols',
            userId
            );
        yield put(filteredProtocolsSuccess(filteredProtocols));
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
};

export function* controlsActionSaga(action: any) {
    const {cardId, controlName, filteredParams, voteParams } = action;
    try {
        yield put(controlLoading(true));
        yield call(ProtocolsPageService.setControlResult,  cardId, controlName, voteParams);
        yield put(controlLoading(false));
        yield delay(500);
        yield filteredProtocolsSaga(filteredParams);
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* FilteredProtocolsSagaWatcher() {
    yield takeLatest(FILTERED_PROTOCOLS_REQUEST, filteredProtocolsSaga);
    yield takeLatest(CONTROLS_ACTION, controlsActionSaga);
}
