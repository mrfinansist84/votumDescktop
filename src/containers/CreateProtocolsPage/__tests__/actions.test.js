import {
    CREATE_PROTOCOL_REQUEST,
} from '../constants';

import {
    createProtocolRequest,
} from '../actions';

describe('createProtocolRequest actions', () => {
    it('createProtocolRequest should return the correct structure', () => {
        const userId = '123';
        const protocol = [{
            protocols: 'test'
        }];
        expect(createProtocolRequest(protocol, userId))
        .toMatchObject({
            type: CREATE_PROTOCOL_REQUEST,
            protocol, userId
        })
    });
});