import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

export const FieldBuilder = (props) => {
  const classes = useStyles();

  return (
    <div className="tenant-fieled-container">
      {props.settings.map((field, i) => (
        <TextField
          key={i}
          id="standard-full-width"
          className={classes.textFieldsCreateProposals}
          label={field.label}
          type={field.type}
          margin="normal"
          placeholder={field.placeholder}
          fullWidth
          required={true}
          onChange={(event) => props.setValue({[field.value]: event.target.value})
          }
        />
      ))}
    </div>
  );
};
