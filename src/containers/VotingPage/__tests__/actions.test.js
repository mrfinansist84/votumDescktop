import {
    VOTING_PROTOCOLS_REQUEST,
    VOTING_PROTOCOLS_SUCCESS,
    VOTING_ACTION
} from '../constants';

import {
    votingProtocolsRequest,
    votingProtocolsSuccess,
    votingAction
} from '../actions';

describe('VotingPage actions', () => {
    it('votingProtocolsRequest should return the correct structure', () => {
        expect(votingProtocolsRequest()).toMatchObject({
            type: VOTING_PROTOCOLS_REQUEST
        })
    });

    it('votingProtocolsSuccess should return the correct structure', () => {
        expect(votingProtocolsSuccess({protocolParams:'test'})).toMatchObject({
            type: VOTING_PROTOCOLS_SUCCESS,
            protocols:{ protocolParams:'test' }
        })
    });
   
    it('votingAction should return the correct structure', () => {
        expect(votingAction('12345', 'testParams', '23')).toMatchObject({
            type: VOTING_ACTION,
            cardId: '12345',
            votingActionParam: 'testParams',
            userId: '23'
        })
    });
});