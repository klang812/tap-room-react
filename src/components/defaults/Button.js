import React from 'react'

const Button = ({className, onClick, text}) => (
  <button
    className={className}
    onClick={onClick}
    type="submit"
  >
    {text}
  </button>
)

export default Button;