import {
    CREATE_PROPOSALS_REQUEST,
} from '../constants';

import {
    createProposalRequest,
} from '../actions';

describe('CreateProposalsPage actions', () => {
    it('createProposalRequest should return the correct structure', () => {
        const userId = '123';
        const proposal = {
            id: 1555455560000,
            title: "test",
            text: "test text",
            createDate: 1555455560000,
            agrees: ['123'],
            against: [],
            abstained: []
        };
        expect(createProposalRequest(proposal, userId))
        .toMatchObject({
            type: CREATE_PROPOSALS_REQUEST,
            proposal, userId
        })
    });
});