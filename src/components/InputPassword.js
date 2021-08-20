import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

function InputPassword({ labelPassword, placeholderPassword }) {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <label className="text-normal text-dark form-label">{labelPassword}</label>
        <p className='m-0'><FontAwesomeIcon icon={faEye} /> mostar</p>
      </div>      
      <input type="password" className="form-control rounded" placeholder={placeholderPassword}/>
    </div>
  );
}

export default InputPassword;