import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class Filter extends Component {
  setFilterValue = (event) => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <div>
        <TextField label="Filter " onChange={this.setFilterValue} />
      </div>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
