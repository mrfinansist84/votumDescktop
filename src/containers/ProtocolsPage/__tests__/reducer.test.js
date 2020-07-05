import { reducer, initialState } from '../reducer';

import {
    FILTERED_PROTOCOLS_REQUEST,
    FILTERED_PROTOCOLS_SUCCESS,
} from '../constants';

describe('ProtocolsPage reducer', () => {
    it('Should return initialState when non capturing action is passed', () => {
        expect(reducer(initialState, {})).toEqual(initialState)
    });

    it('Should return the correct structure FILTERED_PROTOCOLS_REQUEST', () => {
        const basicFilterName = 'test',
            advancedFilterName = 'test',
            advancedFilterValue = 'test'
        expect(reducer(initialState, {
            type: FILTERED_PROTOCOLS_REQUEST,  
            basicFilterName,
            advancedFilterName,
            advancedFilterValue})).toEqual({
            ...initialState,
            basicFilterName, 
            advancedFilterName,  
            advancedFilterValue,
        })
    });

    it('Should return the correct structure FILTERED_PROTOCOLS_SUCCESS', () => {
        expect(reducer(initialState, {
            type: FILTERED_PROTOCOLS_SUCCESS,
            filteredProtocols: [{test:'test'}]
        })).toEqual({
            ...initialState,
            filteredProtocols: [{test:'test'}]
        })
    });

    it('Should return the correct structure FILTERED_PROTOCOLS_SUCCESS', () => {
        expect(reducer(initialState, {
            type: FILTERED_PROTOCOLS_SUCCESS,
            filteredProtocols: null
        })).toEqual({
            ...initialState,
            filteredProtocols: []
        })
    });
});