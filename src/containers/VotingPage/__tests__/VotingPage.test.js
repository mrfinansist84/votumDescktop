import React from 'react';
import { shallow } from 'enzyme';
import { VotingPage } from '../VotingPage';
import CardTemplate from '../../../components/Card';

describe('VotingPage', () => {
    const protocol = [{
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
        protocols: protocol,
        votingAction: jest.fn(),
        votingProtocolsRequest: jest.fn(),
    };
    it('should be defined', () => {
        expect( <VotingPage /> ).toBeDefined();
    });

    it('should render correct correct number of Cards', () => {
        const wrapper = shallow( <VotingPage {...props} />);
       expect(wrapper.find(CardTemplate)).toHaveLength(1);
    });

    it('should make reauest to DB during rendering component', () => {
        const useEffect = jest.spyOn(React, "useEffect");
        shallow( <VotingPage {...props} />);
        expect(useEffect).toHaveBeenCalled();
    });
});