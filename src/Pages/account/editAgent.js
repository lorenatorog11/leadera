import React, {Component} from 'react';
import '../Styles/homePage.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnMain from '../../components/BtnMain.js';
import BtnMainDisabled from '../../components/BtnMainDisabled';
import CardMain from '../../components/CardMain';
import EditCardAgent from '../../components/EditCardAgent';

class EditAgent extends Component {
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
    const labelBtnTwo = 'EDITAR';
    const labelBtnThree= 'ACTIVAR AGENTE';
    const labelBtnFour= 'GUARDAR CAMBIOS';
    const labelCardMain = 'Agentes Activos';
    const textOne = "1";
    const textTwo = "/3";
    const image = "https://randomuser.me/api/portraits/men/10.jpg";


    const labelCardAgent ="Chats";
    const textAgentOne ="50";

    const userOne = "Carlos";
    const passwordOne = "******";
    const emailOne = "andres@teki.com";

    return (
      <div>
        <NavBarTop Show={this.Show}/>
        <div className="app" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-12 col-md-8">
                <h1>AGENTES</h1>
              </div>
              <div className="col-12 col-md-4">
                <a className="d-flex justify-content-start justify-content-md-end" href="/"><BtnMain labelBtn={labelBtn} /></a>                
              </div>              
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-5">
                <p className='text-hyphens'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
              </div>
              <div className="col-12 col-md-7 d-flex flex-wrap">
                <CardMain labelCardMain={labelCardMain} textOne={textOne} textTwo={textTwo}/>
              </div>              
            </div>  
            {/* Section:  Agent*/}
            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <h1>AGENTES ACTIVOS</h1>
              </div>
              <div className="col-12 col-md-4 mt-3 mt-md-0">
                <a className="d-flex justify-content-start justify-content-md-end" href="/"><BtnMainDisabled labelBtn={labelBtnTwo} /></a>                
              </div>
              <div className="col-12 col-md-4 mt-3 mt-md-0">
                <a className="d-flex justify-content-start justify-content-md-end" href="/"><BtnMainDisabled labelBtn={labelBtnThree} /></a>                
              </div>                   
            </div>
            <div className="row d-flex flex-wrap mt-5">
              <div className="col-12 col-md-6 col-lg-4">
                <EditCardAgent image={image} labelCardAgent={labelCardAgent} textAgent={textAgentOne} name={userOne} password={passwordOne} email={emailOne}/>
              </div>
            </div>
            <div className="row d-flex flex-wrap mt-5">
              <div className="col-12 col-md-4">
                <a className="d-flex justify-content-start" href="/"><BtnMain labelBtn={labelBtnFour} /></a>                
              </div>
            </div>          
          </main>
        </div>
      </div>
    )
  }
};

export default EditAgent;



