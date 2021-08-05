import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    <React.Fragment>
      <p>
        <strong>When: </strong> {props.day}
      </p>
      <p>
        <strong>Where: </strong> {props.location}
      </p>
      <p>
        <strong>Hours: </strong> {props.hours}
      </p>
      <p>
        <strong>Booth: </strong> {props.booth}
      </p>
      <hr />
    </React.Fragment>
  );
}
//here we pass in our props as an argument

Market.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default Market;
