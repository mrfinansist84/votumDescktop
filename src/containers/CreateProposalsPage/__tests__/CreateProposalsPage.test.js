import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateProposalsPage } from '../CreateProposalsPage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

configure({ adapter: new Adapter() });

describe('CreateProposalsPage', () => {
    const props = {
        createProposalRequest: jest.fn(),
    };
    it('should be defined', () => {
        expect( <CreateProposalsPage /> ).toBeDefined();
    });

    it('should render correct number of Button & TextField', () => {
        const wrapper = shallow( <CreateProposalsPage {...props} />);
       expect(wrapper.find(TextField)).toHaveLength(2);
       expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('shouldnt call createProposalRequest if user press button', () => {
        const event = {preventDefault:jest.fn};
        const wrapper = shallow( <CreateProposalsPage {...props} />);
        wrapper.find('form').props().onSubmit(event);
        expect(props.createProposalRequest).toHaveBeenCalled();
    });
});