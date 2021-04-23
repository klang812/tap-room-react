import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>{props.brand}</h5>
        <p>{props.price}</p>
        <p>{props.alcoholContect}%</p>
        <p>{props.quantity}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContect: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;
