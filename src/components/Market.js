import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <React.Fragment>
      <h3>{props.day} ---- {props.location}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <hr/>
    </React.Fragment>
  );
}
//here we pass in our props as an argument

Market.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Market;