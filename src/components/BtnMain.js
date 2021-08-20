import React from 'react';
import './Styles/componentsStyle.css';

function BtnMain({ labelBtn }) {
  return (
    <a className="peer col-4 ms-auto" href="#">
      <button className="btn btnMain fw-bold text-black w-100 rounded-pill">{labelBtn}</button>
    </a>
  );
}

export default BtnMain;