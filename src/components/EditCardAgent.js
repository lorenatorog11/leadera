import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import BtnMain from '../components/BtnMain.js';


function EditCardAgent({image, labelCardAgent, textAgent }) {
  const labelBtn = 'BORRAR AGENTE';
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
        <div className="mb-3 col-12">
          <label className="form-label fw-bolder" htmlFor="inputName">Usuario</label>
          <input type="text" className="form-control mb-2" id="inputName" placeholder="Carlos"/>
        </div>
        <div className="mb-3 col-12">
          <div className='d-flex justify-content-between'>
            <label className="form-label fw-bolder" or="inputPassword">Contraseña</label>
            <p className='m-0'><FontAwesomeIcon icon={faEye} /> mostar</p>
          </div>
          <input type="password" className="form-control mb-2" id="inputPassword" placeholder="******"/>
        </div>
        <div className="mb-3 col-12">
          <label className="form-label fw-bolder" htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control mb-2" id="inputEmail" placeholder="andres@teki.com"/>
        </div>
        <div className="mb-3 col-12">
          <label className="form-label fw-bolder" htmlFor="inputLabel">Etiqueta</label>
          <input type="text" className="form-control mb-2" id="inputLabel" placeholder="Servicio al cliente"/>
        </div>
        <div className="col-12">
          <a className="d-flex justify-content-center" href="/"><BtnMain labelBtn={labelBtn} /></a>                
        </div> 
      </div>
    </div>
  );
}

export default EditCardAgent;