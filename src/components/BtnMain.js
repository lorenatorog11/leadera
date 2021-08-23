import React from 'react';
import './Styles/componentsStyle.css';

function BtnMain({ labelBtn }) {
  return (
    <button className="btn btnMain fw-bold text-black w-auto px-4 rounded-pill">{labelBtn}</button>
  );
}

export default BtnMain;