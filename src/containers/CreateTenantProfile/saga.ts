import { takeLatest, call, put } from 'redux-saga/effects';
import CreateTenantsProfileService from './service';
import { CREATE_TENANTS_PROFILE_REQUEST } from './constants';
import { handleRequestError, handleRequestSuccess, controlLoading } from '../MainPage/actions';

export function* createTenantsProfileSaga(data: any) {
    try {
        yield put(controlLoading(true));
        yield call(CreateTenantsProfileService.createProfile, data.profile);
        yield put(handleRequestSuccess('Вы успешно создали анкету'));
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* CreateTenantsProfileSagaWatcher() {
    yield takeLatest(CREATE_TENANTS_PROFILE_REQUEST, createTenantsProfileSaga);
}
