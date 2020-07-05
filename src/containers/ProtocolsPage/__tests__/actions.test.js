import {
    FILTERED_PROTOCOLS_REQUEST,
    FILTERED_PROTOCOLS_SUCCESS,
} from '../constants';

import {
    filteredProtocolsRequest,
    filteredProtocolsSuccess,
} from '../actions';

describe('ProtocolsPage actions', () => {
    it('filteredProtocolsRequest should return the correct structure', () => {
        const basicFilterName = 'test',
            advancedFilterName = 'test',
            advancedFilterValue = 'test'
        expect(filteredProtocolsRequest(
            basicFilterName,
            advancedFilterName,
            advancedFilterValue
        )).toMatchObject({
            type: FILTERED_PROTOCOLS_REQUEST,
            basicFilterName,
            advancedFilterName,
            advancedFilterValue
        })
    });

    it('filteredProtocolsSuccess should return the correct structure', () => {
        expect(filteredProtocolsSuccess([{
            protocols: 'test'
        }])).toMatchObject({
            type: FILTERED_PROTOCOLS_SUCCESS,
            filteredProtocols: [{
                protocols: 'test'
            }]
        })
    });
});