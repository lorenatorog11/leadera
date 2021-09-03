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

class Plan extends Component {
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
  
  Hide = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.remove('is-collapsed');
    this.setState ({show: false})};

  render (){
    const labelBtn = 'CAMBIAR PLAN';
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
    const textThree = "45";
    const textThree_ = "/100";
    const textFour = "2";
    const textFour_ = "/3";

    return (
      <div>
        <NavBarTop/>
        <div className="app" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-12 col-md-4">
                <h1>PLAN XXX - XXX</h1>
                <h5 className=""><FontAwesomeIcon className="" icon={faCircle} />  Activo desde 5 de Junio de 2021</h5>
              </div>
              <div className="col-12 col-md-8">
                <a className="d-flex justify-content-start justify-content-md-end" href="/"><BtnMain labelBtn={labelBtn} /></a>                
              </div>              
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-5">
                <p className='text-hyphens'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
              </div>
              <div className="col-12 col-md-7 d-flex flex-wrap">
                <CardMain labelCardMain={labelCardMain} textOne={textOne} />
              </div>              
            </div>  
            <div className="row mt-0 mt-md-4 d-flex flex-wrap justify-content-between">
              <div className="col-12 col-md-4 mt-4 mt-md-0 d-flex flex-wrap">
                <CardMainLink labelCardMain={labelCardMainOne} textOne={textTwo} labelLink={labelLink} link={link}/>
              </div> 
              <div className="col-12 col-md-4 mt-4 mt-md-0 d-flex flex-wrap">
                <CardMainLink labelCardMain={labelCardMainTwo} textOne={textThree} textTwo={textThree_} labelLink={labelLinkOne} link={linkOne}/>
              </div>             
              <div className="col-12 col-md-3 mt-4 mt-md-0 d-flex flex-wrap">
                <CardMainLink labelCardMain={labelCardMainThree} textOne={textFour} textTwo={textFour_} labelLink={labelLinkTwo} link={linkTwo}/>
              </div>             
            </div>                    
          </main>
        </div>
      </div>
    )
  }
};

export default Plan;



