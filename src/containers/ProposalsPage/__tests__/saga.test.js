import { expectSaga, testSaga, matchers} from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import ProtocolsPageService from '../../ProtocolsPage/service';
import { 
    FILTERED_PROPOSALS_REQUEST, 
    FILTERED_PROPOSALS_SUCCESS,
} from '../constants';
import {
    filteredProposalsSaga, 
    FilteredProposalsSagaWatcher 
} from '../saga';

import { HANDLE_REQUEST_ERROR } from '../../MainPage/constants';

describe('filteredProposalsSaga', () => {
    const params = {
        basicFilterName: 'test',
        advancedFilterName: 'test',
        advancedFilterValue: 'test'};

    it('should be defined', ()=>{
        expect(filteredProposalsSaga).toBeDefined();
    });

    it('should return filteredProposalsSuccess if getFilteredProtocols success', () => {
        const mockConfig = [{test:'test'}];
        
        return expectSaga(filteredProposalsSaga, params)
        .provide([
            [matchers.call.fn(ProtocolsPageService.getFilteredProtocols, params), mockConfig]
        ])
        .put({
            type: FILTERED_PROPOSALS_SUCCESS,
            filteredProposals: [{test:'test'}]
        })
        .silentRun();
    });

    it('should return filteredProposalsError if getFilteredProtocols fails', () => {
        const error = 'error';
        const serviceError = new Error(error);

        return expectSaga(filteredProposalsSaga, params)
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
        testSaga(FilteredProposalsSagaWatcher)
        .next()
        .takeLatest(FILTERED_PROPOSALS_REQUEST, filteredProposalsSaga)
    });
});
