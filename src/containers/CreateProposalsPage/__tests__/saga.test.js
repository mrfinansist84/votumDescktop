import { expectSaga, testSaga, matchers} from 'redux-saga-test-plan';
import { 
    CREATE_PROPOSALS_REQUEST,
} from '../constants';
import {
    createProposalSaga, 
    CreateProposalSagaWatcher 
} from '../saga';

describe('createProposalSaga', () => {
    const params = {
        proposal: {
            title: 'test',
            text: 'test'
        }, userId: '123'};

    it('should be defined', ()=>{
        expect(createProposalSaga).toBeDefined();
    });

    it('should take the latest', () => {
        testSaga(CreateProposalSagaWatcher)
        .next()
        .takeLatest(CREATE_PROPOSALS_REQUEST, createProposalSaga)
    });
});
