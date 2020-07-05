import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProtocolsPage } from '../ProtocolsPage';
import Card from '../../../components/Card';

configure({ adapter: new Adapter() });

describe('ProtocolsPage', () => {
    const filteredProtocol = [{
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
    }];
    const props = {
        filteredProtocols: filteredProtocol,
        votingAction: jest.fn(),
        filteredProtocolsRequest: jest.fn(),
    };
    it('should be defined', () => {
        expect( <ProtocolsPage /> ).toBeDefined();
    });

    it('should render correct correct number of Cards', () => {
        const wrapper = shallow( <ProtocolsPage {...props} />);
       expect(wrapper.find(Card)).toHaveLength(1);
    });

});