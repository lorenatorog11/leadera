import React from 'react'

function Btn({ labelBtn }) {
  return (
    <div className="peer w-100">
      <button className="btn bg-dark fw-bold text-white w-100 rounded-pill">{labelBtn}</button>
    </div>
  );
}

export default Btn;