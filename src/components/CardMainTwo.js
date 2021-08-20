import React from 'react'

function CardMainTwo({ labelCardMainOne, labelCardMainTwo, labelCardMainThree, textOne, textTwo, textThree }) {
  return (
    <div className="peer w-100 cardMain d-flex hCard">
      <div className="col-6">
        <h6>{labelCardMainOne}</h6>
        <div className="d-flex"><p className="fw-bold fs-2">{textOne}</p></div>
      </div>
      <div className="col-6 d-flex flex-column">
        <h6 className="my-0">{labelCardMainTwo}</h6>
        <div className="d-flex"><p className="fw-bold fs-5 my-0">{textTwo}</p></div>
        <h6 className="my-0">{labelCardMainThree}</h6>
        <div className="d-flex"><p className="fw-bold fs-5 my-0">{textThree}</p></div>
      </div>
    </div>
  );
}

export default CardMainTwo;