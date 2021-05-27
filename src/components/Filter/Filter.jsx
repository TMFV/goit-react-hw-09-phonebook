import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function Filter({ setFilterToState }) {
  const setFilterValue = (event) => {
    let value = event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  };
  return (
    <div>
      <TextField label="Filter " onChange={setFilterValue} />
    </div>
  );
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
