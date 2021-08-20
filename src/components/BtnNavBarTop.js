import React from 'react';
import './Styles/componentsStyle.css';

function BtnNavBarTop({ labelBtn }) {
  return (
    <a className="peer w-100">
      <button className="btn btnNavBarTop fw-bold text-black w-100 rounded-pill">{labelBtn}</button>
    </a>
  );
}

export default BtnNavBarTop;