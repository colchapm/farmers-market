import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <ul>{props.available}</ul>
      <hr />
    </React.Fragment>
  );
}
//here we pass in our props as an argument

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  available: PropTypes.string.isRequired,
};

export default Produce;
