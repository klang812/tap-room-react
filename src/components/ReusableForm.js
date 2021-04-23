import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Style' />
        <input
          type = 'text'
          name = 'brand'
          placeholder = 'Brewery' />
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Price' />
        <input
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'Alcohol Content' />
        <input
          type = 'text'
          name = 'quantity'
          placeholder = 'Pints Left' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

