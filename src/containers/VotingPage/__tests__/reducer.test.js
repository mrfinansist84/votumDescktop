import { reducer, initialState } from '../reducer';

import {
    VOTING_PROTOCOLS_SUCCESS,
} from '../constants';

describe('VotingPage reducer', () => {
    it('Should return initialState when non capturing action is passed', () => {
        expect(reducer(initialState, {})).toEqual(initialState)
    });

    it('Should return the correct structure VOTING_PROTOCOLS_SUCCESS', () => {
        expect(reducer(initialState, {
            type: VOTING_PROTOCOLS_SUCCESS,
            protocols: [{test:'test'}]
        })).toEqual({
            ...initialState,
            protocols: [{test:'test'}],
        })
    });

    it('Should return the correct structure VOTING_PROTOCOLS_SUCCESS', () => {
        expect(reducer(initialState, {
            type: VOTING_PROTOCOLS_SUCCESS,
            protocols: null
        })).toEqual({
            ...initialState,
            protocols: [],
        })
    });

});