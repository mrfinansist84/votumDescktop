import { expectSaga, testSaga, matchers} from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import ProtocolsPageService from '../service';
import { 
    FILTERED_PROTOCOLS_REQUEST, 
    FILTERED_PROTOCOLS_SUCCESS,
} from '../constants';
import {
    filteredProtocolsSaga, 
    FilteredProtocolsSagaWatcher 
} from '../saga';
import { HANDLE_REQUEST_ERROR } from '../../MainPage/constants';

describe('filteredProtocolsSaga', () => {
    const params = {
        basicFilterName: 'test',
        advancedFilterName: 'test',
        advancedFilterValue: 'test'};

    it('should be defined', ()=>{
        expect(filteredProtocolsSaga).toBeDefined();
    });

    it('should return filteredProtocolsSuccess if getFilteredProtocols success', () => {
        const mockConfig = [{test:'test'}];
        
        return expectSaga(filteredProtocolsSaga, params)
        .provide([
            [matchers.call.fn(ProtocolsPageService.getFilteredProtocols, params), mockConfig]
        ])
        .put({
            type: FILTERED_PROTOCOLS_SUCCESS,
            filteredProtocols: [{test:'test'}]
        })
        .silentRun();
    });

    it('should return filteredProtocolsError if getFilteredProtocols fails', () => {
        const error = 'error';
        const serviceError = new Error(error);

        return expectSaga(filteredProtocolsSaga, params)
        .provide([
            [matchers.call.fn(ProtocolsPageService.getFilteredProtocols, params), throwError(serviceError)]
        ])
        .put({
            type: HANDLE_REQUEST_ERROR,
            error: serviceError
        })
        .silentRun();
    });

    it('should take the latest', () => {
        testSaga(FilteredProtocolsSagaWatcher)
        .next()
        .takeLatest(FILTERED_PROTOCOLS_REQUEST, filteredProtocolsSaga)
    });
});


