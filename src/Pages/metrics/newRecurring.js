import React, {Component} from 'react';
import '../../Pages/Styles/homePage.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnSelect from '../../components/BtnSelect';
import CardMain from '../../components/CardMain';
import {Bar} from 'react-chartjs-2';

class Conversations extends Component {
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
    const labelCardMain = 'Contactos Nuevos';
    const textOne = "20";
    const labelCardMainTwo = 'Contactos Recurrentes';
    const textTwo = "15";
    const listCampaign = ["15 de Junio 2021 - 30 de junio 2021", "16 de Junio 2021 - 30 de junio 2021", "17 de Junio 2021 - 30 de junio 2021"];
    const listCampaignDepartment = ["Departamento", "Departamento", "Departamento"]
    const listCampaignCity = ["Ciudad", "Ciudad", "Ciudad"]
    const listCampaignSex = ["Sexo", "Sexo", "Sexo"]
    const listCampaignAge = ["Edad", "Edad", "Edad"]
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales',
          data: [21, 35, 75, 51, 41, 47],
          fill: false, // for Line chart
          backgroundColor: '#FB8833',
          borderColor: '#FB8833' // for Line chart
        },
        {
          label: 'Leads',
          data: [41, 79, 57, 47, 63, 71],
          fill: false, // for Line chart
          backgroundColor: '#17A8F5',
          borderColor: '#17A8F5' // for Line chart
        }
      ]
    };
    const options = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    };
    return (
      <div>
        <NavBarTop Show={this.Show}/>
        <div className="app" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-12 col-md-8">
                <h1>CONVERSIONES</h1>
              </div>
              <div className="col-12 col-md-4">
                <BtnSelect listCampaign={listCampaign}/>                 
              </div>              
            </div>
            {/* Section:  Campaign*/}      
            <div className="row mt-2">              
              <div className="col-12 d-flex flex-wrap justify-content-end"> 
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" className="btn bg-white text-dark btn-color border border-dark">Día</button>
                    <button type="button" className="btn bg-white text-dark btn-color border border-dark">Semana</button>
                    <button type="button" className="btn bg-white text-dark btn-color border border-dark">Mes</button>
                  </div>
                </div>     
              </div>              
            </div>
            <div className="row mt-2">              
              <div className="col-12">
                <h5>Filtros</h5>   
              </div>              
            </div>
            <div className="row mt-2 col-12 col-md-10 px-0">              
              <div className="col-4 col-sm-4 col-md-3 mt-2 mt-sm-0">
                <BtnSelect listCampaign={listCampaignDepartment}/>      
              </div>        
              <div className="col-4 col-sm-4 col-md-3 mt-2 mt-sm-0">
                <BtnSelect listCampaign={listCampaignCity}/>      
              </div>
              <div className="col-4 col-sm-4 col-md-3 mt-2 mt-sm-0">
                <BtnSelect listCampaign={listCampaignSex}/>      
              </div>
              <div className="col-4 col-sm-4 col-md-3 mt-2 mt-sm-0">
                <BtnSelect listCampaign={listCampaignAge}/>      
              </div>      
            </div>
            <div className="row mt-5 px-0">              
              <div className="col-12 col-md-9 mt-2 mt-sm-0 cardMain">
                <Bar data={data} options={options}/>
              </div> 
              <div className="col-12 col-md-3 mt-2 mt-sm-0">
                <div><CardMain labelCardMain={labelCardMain} textOne={textOne}/></div>
                <div className="mt-4"><CardMain labelCardMain={labelCardMainTwo} textOne={textTwo}/></div>
              </div> 
            </div> 
            <div className="row mt-5 px-0">              
              <div className="col-12 col-md-9 mt-2 mt-sm-0 cardMain">
                {/* <Pie 
                  data={data}
                  width={3}
                  height={3}
                  options={{
                    legend:{display:false},
                    title: {display: true,text: 'Açılan Sandık'},
                  }}/> */}
              </div>
            </div>              
          </main>
        </div>
      </div>
    )
  }
};

export default Conversations;



