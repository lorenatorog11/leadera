import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import BtnMain from '../components/BtnMain.js';


function CreateCardAgent() {
  const labelBtn = 'BORRAR AGENTE';
  const labelBtnTwo = 'Seleccionar archivo';
  return (
    <div className="peer w-100 p-0 d-flex flex-wrap">
      <div className="col-12 d-flex flex-column p-0">
        <div className="mb-3 col-12 px-0">
          <label className="form-label fw-bolder" htmlFor="inputName">Usuario</label>
          <input type="text" className="form-control mb-2" id="inputName" placeholder="Carlos"/>
        </div>
        <div className="mb-3 col-12 px-0">
          <div className='d-flex justify-content-between'>
            <label className="form-label fw-bolder" or="inputPassword">Contraseña</label>
            <p className='m-0'><FontAwesomeIcon icon={faEye} /> mostar</p>
          </div>
          <input type="password" className="form-control mb-2" id="inputPassword" placeholder="******"/>
        </div>
        <div className="mb-3 col-12 px-0">
          <div className='d-flex justify-content-between'>
            <label className="form-label fw-bolder" or="inputPasswordTwo">Ingresa de nuevo la contraseña</label>
            <p className='m-0'><FontAwesomeIcon icon={faEye} /> mostar</p>
          </div>
          <input type="password" className="form-control mb-2" id="inputPasswordTwo" placeholder="******"/>
        </div>
        <div className="mb-3 col-12 px-0">
          <label className="form-label fw-bolder" htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control mb-2" id="inputEmail" placeholder="andres@teki.com"/>
        </div>
        <div className="col-12 px-0">
          <a className="d-flex" href="/"><BtnMain labelBtn={labelBtn} /></a>                
        </div> 
        <div className="col-12 px-0 mt-2">
          <h5>Foto de perfil</h5>
          <a className="d-flex mt-2" href="/"><BtnMain labelBtn={labelBtnTwo} /></a>   
          <p className="fs-6">Por favor cargue una foto cuadrada. Max 2MB. Formatos permitidos: jpg, png y gif</p>             
        </div> 
      </div>
    </div>
  );
}

export default CreateCardAgent;