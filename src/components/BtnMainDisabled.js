import React from 'react';
import './Styles/componentsStyle.css';

function BtnMainDisabled({ labelBtn }) {
  return (
    <button className="btn btnMainDisabled fw-bold text-black w-auto px-4 rounded-pill">{labelBtn}</button>
  );
}

export default BtnMainDisabled;