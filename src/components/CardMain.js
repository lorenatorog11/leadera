import React from 'react'

function CardMain({ labelCardMain, textOne, textTwo }) {
  return (
    <div className="peer w-100 cardMain hCard">
      <h5>{labelCardMain}</h5>
      <div className="d-flex"><p className="fw-bold fs-2">{textOne}</p><p className="fw-bold fs-5 text">{textTwo}</p></div>
    </div>
  );
}

export default CardMain;