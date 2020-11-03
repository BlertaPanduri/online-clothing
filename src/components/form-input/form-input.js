import React from 'react';
import './form-input.styles.scss';
/** Inputet qe i vendosim brenda form-ave */

const FormInput = ({handleChange, label, ...otherProps}) => (
   <div className='group'>
       <input className="form-input" onChange={handleChange} {...otherProps}/>
       {
           label ? 
          (<label className={`${otherProps.value.length ? 'shrink' : ''}  form-input-label`}>
              {label}
          </label>
          ) : null
        }

   </div>
)

export default FormInput;