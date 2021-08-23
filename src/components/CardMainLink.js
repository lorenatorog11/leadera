import React from 'react'

function CardMain({ labelCardMain, textOne, textTwo, labelLink, link }) {
  return (
    <div className="peer w-100 cardMain">
      <h5>{labelCardMain}</h5>
      <div className="d-flex"><p className="fw-bold fs-2">{textOne}</p><p className="fw-bold fs-5 text">{textTwo}</p></div>
      <a className="my-2 linkStyle" href={link}>{labelLink}</a>
    </div>
  );
}

export default CardMain;