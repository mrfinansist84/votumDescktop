import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProtocolRequest } from './actions'
import Input from '@material-ui/core/Input';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import DatePicker from '../../components/DatePicker';
import blue from '@material-ui/core/colors/blue';
import MenuItem from '@material-ui/core/MenuItem';
import './CreateProtocolsPage.scss';
import translater from '../../global/translation.json';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  }
});

const initialState = {
  title: '', 
  serialNumber: '',
  voteDate: Date.now(),
  createDate: Date.now(),
  status: '',
  file: ''
};

export const CreateProtocolsPage = (props: any) => {
  const [preparedProtocol, setPreparedProtocol] = useState(initialState);
  const classes = useStyles();
  const userId = '23';
const { file, title, serialNumber, voteDate, createDate, status } = preparedProtocol;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.createProtocolRequest(preparedProtocol, userId);
    setPreparedProtocol(initialState);
    event.nativeEvent.target.reset();
  };

  return (
    <div className="create-protocols-page-container">
      <form onSubmit={handleSubmit}>
        <MuiThemeProvider theme={theme}>
          <div className="container">
          <Paper
            className={classes.firstPart}
            style={{ padding: '0 20px 20px 20px' , marginTop: 20, marginRight: 20,  }}>
             <div className="separator line">
            <TextField
              id="standard-full-width"
              className={classes.textFieldsCreateProposals}
              label={translater.createProtocolsPage.title}
              type="text"
              value={title}
              margin="normal"
              placeholder={translater.createProtocolsPage.inputTitle}
              fullWidth
              required={true}
              onChange={(event: any) => setPreparedProtocol({ ...preparedProtocol, title: event.target.value })}
            />
            <TextField
              id="standard-full-width"
              className={classes.textFieldsCreateProposals}
              label={translater.createProtocolsPage.serialNumber}
              type="text"
              value={serialNumber}
              margin="normal"
              placeholder={translater.createProtocolsPage.inputSerialNumber}
              fullWidth
              required={true}
              onChange={(event: any) => setPreparedProtocol({ ...preparedProtocol, serialNumber: event.target.value })}
            />
             <DatePicker 
              selectedDate={createDate}
              setSelectedDate={(filter: any) => setPreparedProtocol({ ...preparedProtocol, createDate: filter })}
             label={translater.createProtocolsPage.createDate}/>
         </div>
         <div className="separator line2">
          <Input
          required={true}
          disableUnderline={true}
          type="file"
          fullWidth 
          onChange={(event:any)=>setPreparedProtocol({ ...preparedProtocol, file: event.nativeEvent.target.files[0]})}
          className={classes.inputStyle}/>
          <TextField
          id="standard-select-currency"
          select
          fullWidth
          required={true}
          className={classes.textFieldsCreateProposals}
          label={translater.createProtocolsPage.status}
          value={status}
          onChange={(event: any) => setPreparedProtocol({ ...preparedProtocol, status: event.target.value })}
        >
            <MenuItem value="voting">{translater.createProtocolsPage.voting}</MenuItem>
            <MenuItem value="inDiscussion">{translater.createProtocolsPage.inDiscussion}</MenuItem>
        </TextField>
         {status === 'voting' && <DatePicker 
          selectedDate={voteDate}
          setSelectedDate={(filter: any) => setPreparedProtocol({ ...preparedProtocol, voteDate: filter })}
          label={translater.createProtocolsPage.voteDate}/>}
          </div>
        </Paper>
        </div>
        </MuiThemeProvider>
        <Button
          className={classes.buttonCreateProposals}
          type="submit"
          size="medium"
          variant="outlined">
          {translater.createProtocolsPage.createBtn}
        </Button>
      </form>
    </div>
  )
};

const mapDispatchToProps = {
  createProtocolRequest
}

export default connect(null, mapDispatchToProps)(CreateProtocolsPage);