import React from 'react';
import './styles.css'
import P from 'prop-types';

export const TextInput = ({ handleChange, searchValue }) =>(
    <input
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder='type your search' />

)

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};





