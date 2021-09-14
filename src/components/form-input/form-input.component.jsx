import React from 'react'
import { TextField } from 'ui-neumorphism'
import './form-input.styles.scss'


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
      <TextField 
        dark 
        rounded 
        dense 
        placeholder={label} 
        onChange={() => handleChange} />
    </div>
  );
  
  export default FormInput;