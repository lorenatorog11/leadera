import React, {Component} from 'react';
import '../Styles/homePage.css';
import '../../components/Styles/componentsStyle.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnMain from '../../components/BtnMain.js';
import { Link } from 'react-router-dom';
import BtnMainDisabled from '../../components/BtnMainDisabled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

class EditProfile extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
      show : true
      } 
  }
  Show = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.toggle('is-collapsed');
    document.getElementById('containerMain').classList.toggle('containerMain');
    const show = this.state.show ? false : this.state.show === false? true : '';
    this.setState ({show: show})};

  render (){
    const labelBtn = 'EDITAR';
    const labelBtnOne = 'Seleccionar archivo';
    const labelBtnTwo = 'GUARDAR CAMBIOS';

    return (
      <div>
        <NavBarTop/>
        <div className="app is-collapsed" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-8">
                <h1>PERFIL</h1>
              </div>
              <div className="col-4">
                <Link className="d-flex justify-content-end" to='#'><BtnMainDisabled labelBtn={labelBtn} /></Link>                
              </div>              
            </div>
            <div className="row mt-5 d-flex flex-wrap">
              <div className="masonry-item col-12">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputName">Nombres</label>
                      <input type="text" className="form-control col-8 mb-2" id="inputName" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputFactory">Empresa</label>
                      <input type="text" className="form-control col-8 mb-2" id="inputFactory" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputLastName">Apellidos</label>
                      <input type="text" className="form-control col-8 mb-2" id="inputLastName" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputNumber">Nit</label>
                      <input type="number" className="form-control col-8 mb-2" id="inputNumber" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputEmail">Email</label>
                      <input type="email" className="form-control col-8 mb-2" id="inputEmail" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputCountry">Pais</label>
                      <select id="inputCountry" className="form-control form-select col-8 mb-2">
                        <option></option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputNumberTwo">Teléfono</label>
                      <input type="number" className="form-control col-8 mb-2" id="inputNumberTwo" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputDepartment">Departamento</label>
                      <select id="inputDepartment" className="form-control form-select col-8 mb-2">
                        <option></option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputPhone">Celular</label>
                      <input type="number" className="form-control col-8 mb-2" id="inputPhone" placeholder=""/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputCity">Ciudad</label>
                      <select id="inputCity" className="form-control form-select col-8 mb-2">
                        <option></option>
                      </select>
                    </div>
                    <div>
                      <p className="fw-bolder m-4">Foto de perfil</p>
                      <BtnMain labelBtn={labelBtnOne} />
                      <p className="m-4">Por favor cargue una foto cuadrada. Max 2MB. Formatos permitidos: jpg, png y gif</p>
                    </div>
                    <div className="M-Y">
                      <BtnMain labelBtn={labelBtnTwo} />
                    </div>
                  </div>
                </form>
              </div>            
            </div> 
            <hr/> 
            <div className="row">
              <div className="col-8">
                <h1>CREDENCIALES DE ACCESO</h1>
              </div>
              <div className="col-4">
                <a className="d-flex justify-content-end" href="#"><BtnMainDisabled labelBtn={labelBtn} /></a>                
              </div>              
            </div>
            <div className="row mt-5 d-flex flex-wrap">
              <div className="masonry-item col-md-12">
                <form>
                  <div className="row d-flex flex-column">
                    <div className="mb-3 col-6">
                      <label className="form-label fw-bolder" for="inputName">Nombre de Usuario</label>
                      <input type="text" className="form-control mb-2" id="inputName" placeholder=""/>
                    </div>
                    <div class="mb-3 col-6">
                      <div className='d-flex justify-content-between'>
                        <label className="form-label fw-bolder" or="inputPassword">Contraseña</label>
                        <p className='m-0'><FontAwesomeIcon icon={faEye} /> mostar</p>
                      </div>
                      <input type="password" class="form-control mb-2" id="inputPassword" placeholder=""/>
                    </div>
                  </div>
                  <div className="M-Y">
                    <BtnMain labelBtn={labelBtnTwo} />
                  </div>
                </form>
              </div>             
            </div>             
          </main>
        </div>
      </div>
    )
  }
};

export default EditProfile;



