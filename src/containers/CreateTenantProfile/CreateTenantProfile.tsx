import React, { useState } from "react";
import { connect } from "react-redux";
import { createTenantsProfileRequest } from "./actions";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import blue from "@material-ui/core/colors/blue";
import { FieldBuilder } from "./FieldBuilder";
import { fieldSettingsName, fieldSettingsPersonalData } from "./constants";
import "./CreateTenantProfile.scss";
import translater from '../../global/translation.json';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const initialState = {
  flatNumber: undefined,
  secondName: "",
  name: "",
  email: "",
  area: undefined,
  phoneNumber: undefined,
};

export const CreateTenantProfile = (props: any) => {
  const [profile, setProfile] = useState(initialState);
  const classes = useStyles();
  const userId = "23";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.createTenantsProfileRequest(profile);
    setProfile(initialState);
    event.nativeEvent.target.reset();
  };

  return (
    <div className="create-protocols-page-container">
      <form onSubmit={handleSubmit}>
        <MuiThemeProvider theme={theme}>
          <div className="container">
            <Paper
              className={classes.firstPart}
              style={{
                padding: "0 20px 20px 20px",
                marginTop: 20,
                marginRight: 20,
              }}
            >
              <FieldBuilder
                settings={fieldSettingsName(translater)}
                setValue={(value: any) => setProfile({ ...profile, ...value })}
                params={profile}
              />
              <FieldBuilder
                settings={fieldSettingsPersonalData(translater)}
                setValue={(value: any) => setProfile({ ...profile, ...value })}
                params={profile}
              />
            </Paper>
          </div>
        </MuiThemeProvider>
        <Button
          className={classes.buttonCreateProposals}
          type="submit"
          size="medium"
          variant="outlined"
        >
          {translater.createTenantProfile.createBtn}
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createTenantsProfileRequest,
};

export default connect(null, mapDispatchToProps)(CreateTenantProfile);
