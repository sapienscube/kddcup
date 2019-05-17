import React from "react";
import { TextField, withStyles, Grid } from "@material-ui/core";

const styles = {
  textField: {
    width: "100%"
  }
};

const placeholder =
  "0, tcp, http, SF, 184, 124, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 0.00, 10, 10, 1.00, 0.00, 0.10, 0.00, 0.00, 0.00, 0.00, 0.00";

class CSVRecord extends React.Component {
  state = {};
  handleChange = event => {
    const features = event.target.value.split(",");
    this.props.onCSVChange(features);
  };
  render() {
    const classes = this.props.classes;
    return (
      <Grid container justify="center">
        <Grid item sm={11}>
          <TextField
            id="outlined-with-placeholder"
            label="CSV Record"
            placeholder={placeholder}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CSVRecord);