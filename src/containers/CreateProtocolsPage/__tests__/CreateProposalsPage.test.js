import React from 'react';
import { shallow } from 'enzyme';
import { CreateProtocolsPage } from '../CreateProtocolsPage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

describe('CreateProtocolsPage', () => {
    const props = {
        createProtocolRequest: jest.fn(),
    };
    it('should be defined', () => {
        expect( <CreateProtocolsPage /> ).toBeDefined();
    });

    it('should render correct number of Button & TextField', () => {
        const wrapper = shallow( <CreateProtocolsPage {...props} />);
       expect(wrapper.find(TextField)).toHaveLength(3);
       expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should call createProtocolRequest if user press button', () => {
        const event = {preventDefault:jest.fn,
            nativeEvent: {target: {reset(){}}}};
        const wrapper = shallow( <CreateProtocolsPage {...props} />);
        wrapper.find('form').props().onSubmit(event);
        expect(props.createProtocolRequest).toHaveBeenCalled();
    });
});