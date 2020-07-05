import {
    FILTERED_PROPOSALS_REQUEST,
    FILTERED_PROPOSALS_SUCCESS, 
    FILTERED_PROPOSALS_ERROR,
} from '../constants';

import {
    filteredProposalsRequest,
    filteredProposalsSuccess,
    filteredProposalsError
} from '../actions';

describe('ProposalsPage actions', () => {
    it('filteredProposalsRequest should return the correct structure', () => {
        const basicFilterName = 'test',
            advancedFilterName = 'test',
            advancedFilterValue = 'test',
            userId = '123'
        expect(filteredProposalsRequest(
            basicFilterName,
            advancedFilterName,
            advancedFilterValue,
            userId
        )).toMatchObject({
            type: FILTERED_PROPOSALS_REQUEST,
            basicFilterName,
            advancedFilterName,
            advancedFilterValue,
            userId
        })
    });

    it('filteredProposalsSuccess should return the correct structure', () => {
        expect(filteredProposalsSuccess([{
            proposals: 'test'
        }])).toMatchObject({
            type: FILTERED_PROPOSALS_SUCCESS,
            filteredProposals: [{
                proposals: 'test'
            }]
        })
    });
});