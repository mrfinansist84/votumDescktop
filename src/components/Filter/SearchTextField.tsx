import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {BLUE_FOR_CARD} from '../../global/pallete';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: BLUE_FOR_CARD,
    },
    margin: 10
  },
}));

export const SearchTextField: React.FC<any> = ({ innerFilterHandler, placeholder }) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    innerFilterHandler((event.target as HTMLInputElement).value)
  };

  return <TextField 
  placeholder={placeholder}
  fullWidth
  onChange={handleChange}
  className={classes.root}
  />
};