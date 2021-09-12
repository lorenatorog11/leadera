import React, {Component} from 'react';
import './Styles/homePage.css';
import '../assets/styles/index.scss';
import '../assets/scripts/index.js';
import '../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../components/NavBarLeft.js';
import NavBarTop from '../components/NavBarTop.js';
import BtnMain from '../components/BtnMain.js';
import CardMain from '../components/CardMain';
import BtnSelect from '../components/BtnSelect';

class Leads extends Component {
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
    const labelCardMain = 'Leads';
    const textOne = "250";
    const textTwo = "/400";
    const listCampaign = ["15 de Junio 2021 - 30 de junio 2021", "16 de Junio 2021 - 30 de junio 2021", "17 de Junio 2021 - 30 de junio 2021"];
    const listDisplay =[10,20,30];

    return (
      <div>
        <NavBarTop Show={this.Show}/>
        <div className="app" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-12 col-md-8">
                <h1>LEADS</h1>
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
            <div className="row mt-5 d-flex flex-wrap">              
              <div className="col-6 d-flex flex-wrap">
                <p>Rango de fechas</p>
                <div className="col-8">
                  <BtnSelect listCampaign={listCampaign}/> 
                </div>
              </div>
              <div className="col-6 d-flex flex-wrap">
                <p>Visualización</p>
                <div className="col-8">
                  <BtnSelect listCampaign={listDisplay}/> 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-2 border border-dark rounded-3 p-0">
                <table id="dataTable" className="table table-striped table-bordered" cellspacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Edad</th>
                      <th>Sexo</th>
                      <th>Ciudad</th>
                      <th>Departamento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                    <tr>
                      <td>Carlos Andrés</td>
                      <td>Aristizábal</td>
                      <td>28</td>
                      <td>M</td>
                      <td>Envigado</td>
                      <td>Antioquia</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
};

export default Leads;



