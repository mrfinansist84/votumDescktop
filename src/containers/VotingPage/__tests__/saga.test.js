import { expectSaga, testSaga, matchers} from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import VotingPageService from '../service';
import {
     VOTING_PROTOCOLS_REQUEST,
     VOTING_ACTION, 
     VOTING_PROTOCOLS_SUCCESS,
    } from '../constants';
import {
    votingProtocolsSaga, 
    votingActionSaga, 
    VotingProtocolsSagaWatcher 
} from '../saga';
import { HANDLE_REQUEST_ERROR } from '../../MainPage/constants';

describe('votingProtocolsSaga', () => {
    
    it('should be defined', ()=>{
        expect(votingProtocolsSaga).toBeDefined();
    });

    it('should return votingProtocolsSuccess if getVotingProtocols success', () => {
        const mockConfig = [{test:'test'}];
        return expectSaga(votingProtocolsSaga)
        .provide([
            [matchers.call.fn(VotingPageService.getVotingProtocols), mockConfig]
        ])
        .put({
            type: VOTING_PROTOCOLS_SUCCESS,
            protocols: [{test:'test'}]
        })
        .run();
    });

    it('should return votingProtocolsError if getVotingProtocols fails', () => {
        const error = 'error';
        const serviceError = new Error(error);

        return expectSaga(votingProtocolsSaga)
        .provide([
            [matchers.call.fn(VotingPageService.getVotingProtocols), throwError(serviceError)]
        ])
        .put({
            type: HANDLE_REQUEST_ERROR,
            error: serviceError
        })
        .run();
    });
});

describe('votingActionSaga', () => {
    const mockAction = {
        cardId: '12345',
        votingActionParam: 'test', 
        userId: '23'
    };

    it('should be defined', ()=>{
        expect(votingActionSaga).toBeDefined();
    });

    it('should return votingProtocolsSuccess if setVotingResult success', () => {
        const mockConfig = [{test:'test'}];
        return expectSaga(votingActionSaga, mockAction)
        .delay(500)
        .provide([
            [matchers.call.fn(VotingPageService.setVotingResult, 
                mockAction.cardId, 
                mockAction.votingActionParam, 
                mockAction.userId
                )],
            [call(VotingPageService.getVotingProtocols), mockConfig]
        ])
        .put({
            type: VOTING_PROTOCOLS_SUCCESS,
            protocols: [{test:'test'}]
        })
        .run({ timeout: false });
    });

    it('should return votingProtocolsError if setVotingResult fails', () => {
        const error = 'error';
        const serviceError = new Error(error);

        return expectSaga(votingActionSaga, mockAction)
        .delay(500)
        .provide([
            [matchers.call.fn(VotingPageService.setVotingResult, 
                mockAction.cardId, 
                mockAction.votingActionParam, 
                mockAction.userId
                )],
            [call(VotingPageService.getVotingProtocols), throwError(serviceError)]
        ])
        .put({
            type: HANDLE_REQUEST_ERROR,
            error: serviceError
        })
        .run({ timeout: false });
    });

    it('should take the latest', () => {
        testSaga(VotingProtocolsSagaWatcher)
        .next()
        .takeLatest(VOTING_PROTOCOLS_REQUEST, votingProtocolsSaga)
        .next()
        .takeLatest(VOTING_ACTION, votingActionSaga);
    });
});

