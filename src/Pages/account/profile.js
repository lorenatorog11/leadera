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
      show : true
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
    const labelLink = 'Ver métricas';
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
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-4">
                <h1>PERFIL</h1>
              </div>
              <div className="col-8">
                <a className="d-flex justify-content-end" href="#"><BtnMain labelBtn={labelBtn} /></a>                
              </div>              
            </div>
          </main>
        </div>
      </div>
    )
  }
};

export default Profile;



