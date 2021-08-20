import React from 'react'

function Input({ label, placeholder, type }) {
  return (
    <div>
      <label className="text-normal text-dark form-label">{label}</label>
      <input type={type} className="form-control rounded" placeholder={placeholder}/>
    </div>
  );
}

export default Input;