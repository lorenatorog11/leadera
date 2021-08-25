import React, {Component} from 'react';
import '../Styles/homePage.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnMain from '../../components/BtnMain.js';
import CardMain from '../../components/CardMain';
import CardMainLink from '../../components/CardMainLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
      show : false
      } 
  }
  Show = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.toggle('is-collapsed');
    document.getElementById('containerMain').classList.toggle('containerMain');
    const show = this.state.show ? false : this.state.show === false? true : '';
    this.setState ({show: show})};
  
  Hide = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.remove('is-collapsed');
    this.setState ({show: false})};

  render (){
    const labelBtn = 'EDITAR';
    const labelBtnTwo = 'Ver métricas';
    const labelLinkOne = 'Ver métricas';
    const labelLinkTwo = 'Ver Agentes';

    const link = '/';
    const linkOne = '/';
    const linkTwo = '/';

    const labelCardMain = 'Costo Mensual';
    const labelCardMainOne="Leads Totales";
    const labelCardMainTwo="Leads Campaña Activa";
    const labelCardMainThree="Agentes";


    const textOne = "$ 1’100.000";
    const textTwo = "250";
    const textTwo_ = "/400";
    const textThree = "45";
    const textThree_ = "/100";
    const textFour = "2";
    const textFour_ = "/3";

    return (
      <div>
        <NavBarTop/>
        <div className="app is-collapsed" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer containerMain" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-8">
                <h1>PERFIL</h1>
              </div>
              <div className="col-4">
                <a className="d-flex justify-content-end" href="#"><BtnMain labelBtn={labelBtn} /></a>                
              </div>              
            </div>
            <div className="row mt-5 d-flex flex-wrap">
              <div className="masonry-item col-md-8">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputName">Nombres</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputName" placeholder="Andrés"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputFactory">Empresa</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputFactory" placeholder="Teki Agency S.A.S"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputLastName">Apellidos</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputLastName" placeholder="Aristizabal"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputNumber">Nit</label>
                      <input type="number" className="form-control mb-2 p-0 border-0" id="inputNumber" placeholder="901254724-2"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputEmail">Email</label>
                      <input type="email" className="form-control mb-2 p-0 border-0" id="inputEmail" placeholder="andres.aristizabal@tekiagancy.com"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputCountry">Pais</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputCountry" placeholder="Colombia"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputNumberTwo">Teléfono</label>
                      <input type="number" className="form-control mb-2 p-0 border-0" id="inputNumberTwo" placeholder="3345277"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputDepartment">Departamento</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputDepartment" placeholder="andres.aristizabal@tekiagancy.com"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputPhone">Celular</label>
                      <input type="number" className="form-control mb-2 p-0 border-0" id="inputPhone" placeholder="3345277"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label fw-bolder" for="inputCity">Ciudad</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputNumber" placeholder="Envigado"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-4 ">
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
                <a className="d-flex justify-content-end" href="#"><BtnMain labelBtn={labelBtn} /></a>                
              </div>              
            </div>
            <div className="row mt-5 d-flex flex-wrap">
              <div className="masonry-item col-md-12">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-12">
                      <label className="form-label fw-bolder" for="inputName">Nombre de Usuario</label>
                      <input type="text" className="form-control mb-2 p-0 border-0" id="inputName" placeholder="aristizabaru"/>
                    </div>
                    <div class="mb-3 col-md-12">
                      <label class="form-label fw-bolder" for="inputPassword">Contraseña</label>
                      <input type="password" class="form-control mb-2 p-0 border-0" id="inputPassword" placeholder="********"/>
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



