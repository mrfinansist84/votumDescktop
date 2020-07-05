import { takeLatest, call, put } from 'redux-saga/effects';
//import { Profile } from './interface';
import TenantsProfileService from './service';
import { tenantsProfileSuccess } from './actions';
import { TENANTS_PROFILE_REQUEST } from './constants';
import { calcDocumentAmount } from '../MainPage/actions';
import { handleRequestError, controlLoading } from '../MainPage/actions';

export function* tenantsProfileSaga() {
    try {
        yield put(controlLoading(true));
        const tenantsProfole: any[] = yield call(TenantsProfileService.getTenantsProfile);
        yield put(tenantsProfileSuccess(tenantsProfole));
        yield put(calcDocumentAmount(tenantsProfole ? tenantsProfole.length: 0))
        yield put(controlLoading(false));
    } catch (error) {
        yield put(handleRequestError(error));
        yield put(controlLoading(false));
    }
}

export function* TenantsProfileSagaWatcher() {
    yield takeLatest(TENANTS_PROFILE_REQUEST, tenantsProfileSaga);
}
