import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import { buildProtocolDataStructure } from '../../../containers/ProtocolsPage/helpers';
import translater from '../../../global/translation.json';

describe('Card', () => {
    const protocol = {
        id: 123123,
        serialNumber: "123456789",
        title: "test",
        status: "test",
        createDate: 1555455560000,
        voteDate: 1555455560000,
        result: "test",
        agrees: ['333'],
        against: ['88'],
        abstained: ['15']
    };
    const props = {
        cardDefenition: 'protocol',
        info: protocol,
        votingAction: jest.fn(),
        userId: '23',
        canVoteOnThisPage: true,
        defenition: 'protocol',
        dataStructure: buildProtocolDataStructure (protocol, translater)
    };

    it('should be defined', () => {
        expect( <Card /> ).toBeDefined();
    });

    it('should render correct as a structure of buildProtocolDataStructure return', () => {
        const wrapper = shallow( <Card {...props} />);
        expect(wrapper.find('.makeStyles-cardContentList-5').length).toBe(6);
    });
});