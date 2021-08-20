import React, {Component} from 'react';
import '../Pages/Styles/homePage.css';
import '../assets/styles/index.scss';
import '../assets/scripts/index.js';
import '../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../components/NavBarLeft.js';
import NavBarTop from '../components/NavBarTop.js';
import BtnMain from '../components/BtnMain.js';
import CardMain from '../components/CardMain.js';
import CardMainTwo from '../components/CardMainTwo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import imgPhono from '../images/imagePhono.png';

class HomePage extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
      show : true
      } 
  }
  Show = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.toggle('is-collapsed');
    const show = this.state.show ? false : this.state.show === false? true : '';
    this.setState ({show: show})};

  Hide = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.remove('is-collapsed');
    this.setState ({show: false})};

  render (){
    const labelBtn = 'CAMBIAR PLAN';
    const labelCardMain = 'Leads';
    const labelCardMainTwo = 'Agentes';
    const textOne = "250";
    const textTwo = "/400";
    const textThree = "2";
    const textFour = "/3";
    const labelCardMainOne="Leads Adquiridos";
    const labelCardMainThree="Nuevos";
    const labelCardMainFour= "Recurrentes";
    const textFive="45";
    const textSix="30";
    const textSeven="15";
    const labelCardMainFive="Leads Contratados";
    const labelCardMainSix="Valor Nuevo Lead";
    const labelCardMainSeven= "Valor Lead Recurrente";
    const textEigth="100";
    const textNine="$ 1.200";
    const textTen="$ 950";

    return (
      <div>
        <NavBarTop/>
        <div className="app is-collapsed" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer">
            <div className="row">
              <div className="col-4">
                <h1>PLAN XXX - XXX</h1>
                <h5 className="mt-3"><FontAwesomeIcon className="" icon={faCircle} />  Activo desde 5 de Junio de 2021</h5>
                <p className='text-hyphens my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
              </div>
              <div className="col-8">
                <BtnMain labelBtn={labelBtn} />
                <div className="d-flex my-5">
                  <div className="col-8">
                    <CardMain labelCardMain={labelCardMain} textOne={textOne} textTwo={textTwo}/>
                  </div>
                  <div className="col-4">
                    <CardMain labelCardMain={labelCardMainTwo} textOne={textThree} textTwo={textFour}/>
                  </div>
                </div>
              </div>              
            </div>
            <hr/>
            <div className="row">
              <div className="col-4">
                <select class="form-select col-10" aria-label="Default select example">
                  <option value="1">Campaña 1</option>
                  <option value="2">Campaña 2</option>
                  <option value="3">Campaña 3</option>
                </select>
              </div>
              <div className="col-8">
                <BtnMain labelBtn={labelBtn} />
              </div>              
            </div>        
            <div className="row mt-5">              
              <div class="col-8 d-flex flex-wrap">      
                <div className="col-6">
                  <h5 className="mt-3"><FontAwesomeIcon className="" icon={faCircle} />  Activo desde 5 de Junio de 2021</h5>
                  <p className='text-hyphens my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
                </div>        
                <div className="col-6">
                  <CardMain labelCardMain={labelCardMainFive} textOne={textEigth} />
                </div>
                <div class="col-12">
                  <CardMain labelCardMain={labelCardMainSix} textOne={textNine}/>
                </div>
              </div>
              <div className="col-4 d-flex flex-column justify-content-between">
                <div className="col-12">
                  <CardMainTwo labelCardMainOne={labelCardMainOne} labelCardMainTwo={labelCardMainThree} labelCardMainThree={labelCardMainFour} textOne={textFive} textTwo={textSix} textThree={textSeven}/>
                </div>
                <div className="col-12">
                  <CardMain labelCardMain={labelCardMainSeven} textOne={textTen}/>
                </div>  
              </div>              
            </div>
            <div className="row mt-5">              
              <div className="col-6 d-flex">     
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={imgPhono} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                      <img src={imgPhono} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                      <img src={imgPhono} className="d-block w-100" alt=""/>
                    </div>
                  </div>
                  <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-dark" aria-hidden="true"><FontAwesomeIcon className="" icon={faChevronLeft} /></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon text-dark" aria-hidden="true"><FontAwesomeIcon className="" icon={faChevronRight} /></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div> 
              </div>
              <div className="col-6 d-flex">

              </div>              
            </div>         
                   
            <hr/>
          </main>
        </div>
      </div>
    )
  }
};

export default HomePage;



