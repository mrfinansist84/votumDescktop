import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProposalsPage } from '../ProposalsPage';
import Card from '../../../components/Card';

configure({ adapter: new Adapter() });

describe('ProposalsPage', () => {
    const filteredProposals = [{
        id: 123123,
        title: "test",
        text: "test text",
        createDate: 1555455560000,
        agrees: ['333'],
        against: ['88'],
        abstained: ['15']
    }];

    const props = {
        filteredProposals: filteredProposals,
        votingAction: jest.fn(),
        filteredProposalsRequest: jest.fn(),
    };
    it('should be defined', () => {
        expect( <ProposalsPage /> ).toBeDefined();
    });

    it('should render correct number of Cards', () => {
        const wrapper = shallow( <ProposalsPage {...props} />);
       expect(wrapper.find(Card)).toHaveLength(1);
    });

    it('shouldnt render Cards if filterBasicProposals empty', () => {
        const defaultPpops = {...props, filteredProposals:[]};
        const wrapper = shallow( <ProposalsPage {...defaultPpops} />);
       expect(wrapper.find(Card)).toHaveLength(0);
    });
});