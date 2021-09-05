import React, {Component} from 'react';
import '../Styles/homePage.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnMain from '../../components/BtnMain.js';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
      show : true
      } 
  }
  Show = (e)  =>  { 
    e.preventDefault();
    if (this.state.show){
      document.getElementById('app').classList.add('is-collapsed');
      document.getElementById('containerMain').classList.add('containerMain');
    }else if (this.state.show === false ){
      document.getElementById('app').classList.remove('is-collapsed');
      document.getElementById('containerMain').classList.remove('containerMain');
    }

    const show = this.state.show ? false : this.state.show === false? true : '';
    this.setState ({show: show})};

  render (){
    const labelBtn = 'EDITAR';

    return (
      <div>
        <NavBarTop Show={this.Show}/>
        <div className="app" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} />
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-8">
                <h1>PERFIL</h1>
              </div>
              <div className="col-4">
                <Link className="d-flex justify-content-end" to='/account-edit-profile'><BtnMain labelBtn={labelBtn} /></Link>                
              </div>              
            </div>
            <div className="row mt-5 d-flex flex-wrap">
              <div className="masonry-item col-12 col-md-8">
                <form>
                  <div className="row">
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputName">Nombres</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputName" placeholder="Andrés"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputFactory">Empresa</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputFactory" placeholder="Teki Agency S.A.S"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputLastName">Apellidos</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputLastName" placeholder="Aristizabal"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputNumber">Nit</label>
                      <input type="number" className="form-control mb-2 p-0 border-0" id="inputNumber" placeholder="901254724-2"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputEmail">Email</label>
                      <input type="email" className="form-control mb-2 p-0 border-0" id="inputEmail" placeholder="andres.aristizabal@tekiagancy.com"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputCountry">Pais</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputCountry" placeholder="Colombia"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputNumberTwo">Teléfono</label>
                      <input type="number" className="form-control mb-2 p-0 border-0" id="inputNumberTwo" placeholder="3345277"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputDepartment">Departamento</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputDepartment" placeholder="andres.aristizabal@tekiagancy.com"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputPhone">Celular</label>
                      <input type="number" className="form-control mb-2 p-0 border-0" id="inputPhone" placeholder="3345277"/>
                    </div>
                    <div className="mb-3 col-12 col-sm-6 col-md-6">
                      <label className="form-label fw-bolder" htmlFor="inputCity">Ciudad</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputCity" placeholder="Envigado"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-4">
                <p>Foto de perfil</p>
                <img className="w-100" src="https://randomuser.me/api/portraits/men/10.jpg" alt="Foto de perfil"/>
              </div>              
            </div> 
            <hr/> 
            <div className="row">
              <div className="col-8">
                <h1>CREDENCIALES DE ACCESO</h1>
              </div>
              <div className="col-4">
                <Link className="d-flex justify-content-end" to='/account-edit-profile'><BtnMain labelBtn={labelBtn} /></Link>                 
              </div>              
            </div>
            <div className="row mt-5 d-flex flex-wrap">
              <div className="masonry-item col-md-12">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-12">
                      <label className="form-label fw-bolder" htmlFor="inputNameTwo">Nombre de Usuario</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputNameTwo" placeholder="aristizabaru"/>
                    </div>
                    <div className="mb-3 col-md-12">
                      <label className="form-label fw-bolder" htmlFor="inputPassword">Contraseña</label>
                      <input type="password" className="form-control mb-2 p-0 border-0" id="inputPassword" placeholder="********"/>
                    </div>
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

export default Profile;



