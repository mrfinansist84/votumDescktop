import { takeLatest, call, put, delay } from 'redux-saga/effects';
import CreateProtocolPageService from './service';
import { CREATE_PROTOCOL_REQUEST } from './constants';
import { handleRequestError, handleRequestSuccess, controlLoading } from '../MainPage/actions';

export function* createProtocolSaga(data: any) {
    const { protocol, userId } = data;
    try {
        yield put(controlLoading(true));
         const link = yield call(CreateProtocolPageService.sendProtocolToFireStore, protocol.file);
         const totalAmountTenants = yield call(CreateProtocolPageService.getTenantsTotalAmount)
   yield call(CreateProtocolPageService.createProtocol, protocol, link, userId, totalAmountTenants);
        yield put(handleRequestSuccess('Вы успешно создали протокол'));
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* CreateProtocolSagaWatcher() {
    yield takeLatest(CREATE_PROTOCOL_REQUEST, createProtocolSaga);
}
