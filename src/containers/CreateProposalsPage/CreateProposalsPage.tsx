import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CreateProposalsPageProps } from './interface';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createProposalRequest } from './actions';
import useStyles from './styles';
import './CreateProposalsPage.scss';
import blue from '@material-ui/core/colors/blue';
import translater from '../../global/translation.json';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  }
});

export const CreateProposalsPage: React.FC<CreateProposalsPageProps> = ({ createProposalRequest }) => {
  const [proposalText, setProposalText] = useState({ title: '', text: '' });
  const classes = useStyles();
  const userId = '23';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProposalRequest(proposalText, userId);
    setProposalText({ title: '', text: '' });
  };

  return (
    <div className="create-protocols-page-container">
      <form onSubmit={handleSubmit}>
        <MuiThemeProvider theme={theme}>
          <TextField
            id="standard-full-width"
            className={classes.textFieldsCreateProposals}
            label={translater.createProposalsPage.title}
            type="text"
            margin="normal"
            value={proposalText.title}
            placeholder={translater.createProposalsPage.inputTitle}
            fullWidth
            required={true}
            onChange={(event: any) => setProposalText({ ...proposalText, title: event.target.value })}
          />
          <TextField
            id="outlined-multiline-static"
            className={classes.textFieldsCreateProposals}
            label={translater.createProposalsPage.text}
            margin="normal"
            placeholder={translater.createProposalsPage.inputText}
            fullWidth
            rows="25"
            multiline
            value={proposalText.text}
            required={true}
            variant="outlined"
            onChange={(event: any) => setProposalText({ ...proposalText, text: event.target.value })}
          />
        </MuiThemeProvider>
        <Button
          className={classes.buttonCreateProposals}
          type="submit"
          size="medium"
          variant="outlined">
          {translater.createProposalsPage.createBtn}
        </Button>
      </form>
    </div>
  )
};

const mapDispatchToProps = {
  createProposalRequest
}

export default connect(null, mapDispatchToProps)(CreateProposalsPage);