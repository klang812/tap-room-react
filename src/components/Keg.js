import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Style: {props.name}</h3>
        <h5>Brewery: {props.brand}</h5>
        <p>${props.price}</p>
        <p>ABV: {props.alcoholContent}%</p>
        <p>Pints Left: {props.quantity}</p>
        <p><strong>Click here for full details!</strong></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;
