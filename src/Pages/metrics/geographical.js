import React, {Component} from 'react';
import '../../Pages/Styles/homePage.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnSelect from '../../components/BtnSelect';
import BtnsSelectTime from '../../components/BtnsSelectTime';
import {Bar} from 'react-chartjs-2';
import CardGeographical from '../../components/CardGeographical';

class Geographical extends Component {
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
    const listCampaign = ["15 de Junio 2021 - 30 de junio 2021", "16 de Junio 2021 - 30 de junio 2021", "17 de Junio 2021 - 30 de junio 2021"];
    const listCampaignDepartment = ["Departamento", "Departamento", "Departamento"];
    const listCampaignCity = ["Ciudad", "Ciudad", "Ciudad"];
    const listTime =["Día", "Mes", "Año"];    
    const labelCardGeographical = {
      citys: ['Bogotá', 'Medellín', 'Barranquilla', 'Cali', 'Armenia', 'Pereira', 'Envigado', 'Manizales', 'Cartagena', 'Pasto' ],
      amount: [25, 20, 18, 16, 13, 25, 20, 18, 16, 2]
    };
    const data = {
      labels: ['Bogotá', 'Medellín', 'Barranquilla', 'Cali', 'Armenia', 'Pereira', 'Envigado', 'Manizales', 'Cartagena', 'Pasto' ],
      datasets: [
        {
          label: ['25%'],
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
          categoryPercentage: 1.0,
          barPercentage: 0.8,
        },
      ],
    };
    
    const options = {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 1,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: '',
        },
      },
      legend: {
        display: true,
      },
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
                <h1>GEOGRÁFICO</h1>
              </div>
              <div className="col-12 col-md-4">
                <BtnSelect listCampaign={listCampaign}/>                 
              </div>              
            </div>
            {/* Section:  Campaign*/}      
            <div className="row mt-2">              
              <div className="col-12 d-flex flex-wrap justify-content-end"> 
                <BtnsSelectTime listTime={listTime}/>    
              </div>              
            </div>
            <div className="row mt-2">              
              <div className="col-12">
                <h5>Filtros</h5>   
              </div>              
            </div>
            <div className="row mt-2 col-12 col-md-10 px-0">              
              <div className="col-4 col-sm-4 col-md-3 mt-2 mt-md-0">
                <BtnSelect listCampaign={listCampaignDepartment}/>      
              </div>        
              <div className="col-4 col-sm-4 col-md-3 mt-2 mt-md-0">
                <BtnSelect listCampaign={listCampaignCity}/>      
              </div>    
            </div>
            <div className="row mt-5 px-0 d-flex justify-content-center justify-content-md-between">              
              <div className="col-12 col-md-5 mt-2 mb-4 mt-sm-0 px-2 cardMain">
                <Bar data={data} options={options} className="h-100"/>
              </div>               
              <div className="col-12 col-md-5 mt-2 mb-4 mt-sm-0 px-2 d-flex flex-wrap cardMain">
                <CardGeographical labelCardGeographical={labelCardGeographical}/>
              </div> 
              <div className="col-12 col-md-5 mt-2 mb-4 mt-sm-0 px-2 cardMain">
                <Bar data={data} options={options} className="h-100"/>
              </div> 
              <div className="col-12 col-md-5 mt-2 mb-4 mt-sm-0 px-2 d-flex flex-wrap cardMain">
                <CardGeographical labelCardGeographical={labelCardGeographical}/>
              </div> 
            </div>             
          </main>
        </div>
      </div>
    )
  }
};

export default Geographical;



