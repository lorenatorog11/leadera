import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function CardAgent({image, labelCardAgent, textAgent, name, password, email }) {
  return (
    <div className="peer w-100 cardMain p-0 d-flex flex-wrap">
      <div className="col-7 pb-0 cardMainTwo d-flex align-items-center">
        <a href="/" className="d-block position-relative ">
          <img className="profilePictureAgent position-relative bdrs-50p" src={image} alt="Foto de perfil"/>
          <FontAwesomeIcon className="position-absolute start-0" icon={faCircle} />
        </a>
      </div>
      <div className="col-5 border-start border-bottom border-dark cardMainTwo">
        <h3 className="m-0">{labelCardAgent}</h3>
        <h3 className="m-0">{textAgent}</h3>
      </div>
      <div className="col-12 d-flex flex-column cardMainTwo">
        <h4 className="m-0">Usuario</h4>
        <p>{name}</p>
        <h4 className="m-0">Contraseña</h4>
        <p>{password}</p>
        <h4 className="m-0">Email</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default CardAgent;