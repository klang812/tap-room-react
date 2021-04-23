import React from 'react'

const Search = ({className, placeholder, onChange, value}) => (
  <input
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    type="text"
  />
)

export default Search;