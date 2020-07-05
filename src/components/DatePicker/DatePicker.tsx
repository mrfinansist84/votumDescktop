import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const DatePicker = (props:any) => {
  
  const handleDateChange = (date:any) => {
    props.setSelectedDate(date);
  };

  return (
    <div className="dataPicker-container">
    <MuiPickersUtilsProvider 
    utils={DateFnsUtils}
    >
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          label={props.label}
          value={props.selectedDate}
          onChange={handleDateChange}
        />
    </MuiPickersUtilsProvider>
    </div>
  );
};