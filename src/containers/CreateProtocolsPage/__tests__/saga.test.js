import { expectSaga, testSaga, matchers} from 'redux-saga-test-plan';
import { 
    CREATE_PROTOCOL_REQUEST,
} from '../constants';
import {
    createProtocolSaga, 
    CreateProtocolSagaWatcher 
} from '../saga';

describe('createProtocolSaga', () => {
    const params = {
        protocol: {
            title: 'test',
            text: 'test'
        }, 
        link: 'https://#',
        userId: '123',
        totalAmountTenants: 15};

    it('should be defined', ()=>{
        expect(createProtocolSaga).toBeDefined();
    });

    it('should take the latest', () => {
        testSaga(CreateProtocolSagaWatcher)
        .next()
        .takeLatest(CREATE_PROTOCOL_REQUEST, createProtocolSaga)
    });
});
