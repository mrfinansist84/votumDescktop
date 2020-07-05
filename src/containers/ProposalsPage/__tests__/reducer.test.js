import { reducer, initialState } from '../reducer';

import {
    FILTERED_PROPOSALS_REQUEST,
    FILTERED_PROPOSALS_SUCCESS,
} from '../constants';

describe('ProposalsPage reducer', () => {
    it('Should return initialState when non capturing action is passed', () => {
        expect(reducer(initialState, {})).toEqual(initialState)
    });

    it('Should return the correct structure FILTERED_PROPOSALS_REQUEST', () => {
        const basicFilterName = 'test',
        advancedFilterName = 'test',
        advancedFilterValue = 'test'
        expect(reducer(initialState, {
            type: FILTERED_PROPOSALS_REQUEST,
            basicFilterName,
            advancedFilterName,
            advancedFilterValue})).toEqual({
            ...initialState,
            basicFilterName,
            advancedFilterName,
            advancedFilterValue
        })
    });

    it('Should return the correct structure FILTERED_PROPOSALS_SUCCESS', () => {
        expect(reducer(initialState, {
            type: FILTERED_PROPOSALS_SUCCESS,
            filteredProposals: [{test:'test'}]
        })).toEqual({
            ...initialState,
            filteredProposals: [{test:'test'}]
        })
    });

    it('Should return the correct structure FILTERED_PROPOSALS_SUCCESS', () => {
        expect(reducer(initialState, {
            type: FILTERED_PROPOSALS_SUCCESS,
            filteredProposals: null
        })).toEqual({
            ...initialState,
            filteredProposals: []
        })
    });
});