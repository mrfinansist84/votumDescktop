import React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from '../DatePicker';
import { KeyboardDatePicker } from '@material-ui/pickers';

describe('DatePicker', () => {
    const props = {
        setSelectedDate: jest.fn(), 
        label: 'test',
        selectedDate: Date.now(),
    };
    it('should be defined', () => {
        expect( <DatePicker /> ).toBeDefined();
    });

    it('should render correct structure', () => {
        const wrapper = shallow( <DatePicker {...props} />);
       expect(wrapper.find(KeyboardDatePicker)).toHaveLength(1);
    });

    it('should render correct structure', () => {
        const wrapper = shallow( <DatePicker {...props} />);
       wrapper.find(KeyboardDatePicker).props().onChange();
       expect(props.setSelectedDate).toHaveBeenCalled();
    });
});