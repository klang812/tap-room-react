import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h5>{props.brand}</h5>
      <p>{props.price}</p>
      <p>{props.alcoholContect}%</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContect: PropTypes.string.isRequired
};

export default Keg;
