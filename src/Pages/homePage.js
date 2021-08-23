import React, {Component} from 'react';
import '../Pages/Styles/homePage.css';
import '../assets/styles/index.scss';
import '../assets/scripts/index.js';
import '../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../components/NavBarLeft.js';
import NavBarTop from '../components/NavBarTop.js';
import BtnMain from '../components/BtnMain.js';
import CardMain from '../components/CardMain.js';
import CardMain_ from '../components/CardMain_.js';
import CardMainTwo from '../components/CardMainTwo';
import CardAgent from '../components/CardAgent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,  faInstagram } from '@fortawesome/free-brands-svg-icons';
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
    document.getElementById('containerMain').classList.toggle('containerMain');
    const show = this.state.show ? false : this.state.show === false? true : '';
    this.setState ({show: show})};
  
  Hide = (e)  =>  { 
    e.preventDefault();
    document.getElementById('app').classList.remove('is-collapsed');
    this.setState ({show: false})};

  render (){
    const labelBtn = 'CAMBIAR PLAN';
    const labelBtnTwo = 'COMPRAR LEADS';
    const labelBtnThree = 'CREAR CAMPAÑA';
    const labelBtnFour = 'CAMBIAR ANUNCIO';
    const labelBtnFive = 'ACTIVAR AGENTE';

    const labelCardMain = 'Leads';
    const labelCardMainOne="Agentes";
    const labelCardMainTwo = 'Leads Contratados';
    const labelCardMainThree="Valor Nuevo Lead";
    const labelCardMainFour= "Leads Adquiridos";
    const labelCardMainFive="Nuevos";
    const labelCardMainSix="Recurrentes";
    const labelCardMainSeven= "Valor Lead Recurrente";
    const labelCardMainEight = "Medios";
    const labelCardMainNine = "Alcance";
    const labelCardMainTen = "Clics";
    const labelCardMainEleven = "CTR";

    const textOne = "250";
    const textOne_ = "/400";
    const textTwo = "2";
    const textTwo_ = "/3";
    const textThree = "100";
    const textFour="$1.200";
    const textFive = "45";
    const textSix="30";
    const textSeven="15";
    const textEigth="$950";
    const textNine="5k";
    const textTen="1.5k";
    const textEleven="20%";

    const image = "https://randomuser.me/api/portraits/men/10.jpg";

    const labelCardAgent ="Chats";
    const textAgentOne ="50";
    const textAgentTwo ="0";

    const userOne = "Carlos";
    const passwordOne = "******";
    const emailOne = "andres@teki.com";

    return (
      <div>
        <NavBarTop/>
        <div className="app is-collapsed" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-4">
                <h1>PLAN XXX - XXX</h1>
                <h5 className=""><FontAwesomeIcon className="" icon={faCircle} />  Activo desde 5 de Junio de 2021</h5>
              </div>
              <div className="col-8">
                <a className="d-flex justify-content-end" href="#"><BtnMain labelBtn={labelBtn} /></a>                
              </div>              
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <p className='text-hyphens'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
              </div>
              <div className="col-8 d-flex flex-wrap">
                <div className="col-8">
                  <CardMain labelCardMain={labelCardMain} textOne={textOne} textTwo={textOne_}/>
                </div>
                <div className="col-4">
                  <CardMain labelCardMain={labelCardMainOne} textOne={textTwo} textTwo={textTwo_}/>
                </div>
              </div>              
            </div>            
            <hr/>
            {/* Section:  Campaign*/}
            <div className="row">
              <div className="col-4">
                <select className="form-select col-10" aria-label="Default select example">
                  <option value="1">Campaña 1</option>
                  <option value="2">Campaña 2</option>
                  <option value="3">Campaña 3</option>
                </select>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <a className="d-flex justify-content-end ps-3" href="#">
                  <BtnMain labelBtn={labelBtnTwo} /></a> 
                <a className="d-flex justify-content-end ps-3" href="#">
                  <BtnMain labelBtn={labelBtnThree} /></a>                     
              </div>              
            </div>        
            <div className="row mt-5">              
              <div className="col-8 d-flex flex-wrap">      
                <div className="col-6">
                  <h5 className="mt-3"><FontAwesomeIcon className="" icon={faCircle} />  Activo desde 5 de Junio de 2021</h5>
                  <p className='text-hyphens my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
                </div>        
                <div className="col-6">
                  <CardMain labelCardMain={labelCardMainTwo} textOne={textThree} />
                </div>
                <div className="col-12">
                  <CardMain labelCardMain={labelCardMainThree} textOne={textFour}/>
                </div>
              </div>
              <div className="col-4 d-flex flex-column justify-content-between">
                <div className="col-12">
                  <CardMainTwo labelCardMainOne={labelCardMainFour} labelCardMainTwo={labelCardMainFive} labelCardMainThree={labelCardMainSix} textOne={textFive} textTwo={textSix} textThree={textSeven}/>
                </div>
                <div className="col-12">
                  <CardMain labelCardMain={labelCardMainSeven} textOne={textEigth}/>
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
              <div className="col-6">
                <a className="d-flex justify-content-end" href="#"><BtnMain labelBtn={labelBtnFour} /></a>
                <div className="col-12 mt-4">
                  <h2>ANUNCIO</h2>
                  <h5 className="mt-2"><FontAwesomeIcon className="" icon={faCircle} />15 días activo</h5>
                  <p className='text-hyphens my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="col-6 p-5">
                    <CardMain_>
                      <h5>{labelCardMainEight}</h5>
                      <div className="d-flex"><FontAwesomeIcon className="fs-1 me-2" icon={faFacebook} /><FontAwesomeIcon className="fs-1" icon={faInstagram} /></div>
                    </CardMain_>
                  </div>
                  <div className="col-6 p-5">
                    <CardMain labelCardMain={labelCardMainNine} textOne={textNine} />
                  </div>
                  <div className="col-6 p-5">
                    <CardMain labelCardMain={labelCardMainTen} textOne={textTen} />
                  </div>
                  <div className="col-6 p-5">
                    <CardMain labelCardMain={labelCardMainEleven} textOne={textEleven} />
                  </div>
                </div>     
              </div>              
            </div>            
            <hr/>
            {/* Section:  Agent*/}
            <div className="row">
              <div className="col-4">
                <h1>AGENTES ACTIVOS</h1>
                <h5 className=""><FontAwesomeIcon className="" icon={faCircle} />Agente en proceso de activación</h5>
              </div>
              <div className="col-8">
                <a className="d-flex justify-content-end" href="#"><BtnMain labelBtn={labelBtnFive} /></a>                
              </div>              
            </div>
            <div className="row d-flex flex-wrap">
              <div className="col-3">
                <CardAgent image={image} labelCardAgent={labelCardAgent} textAgent={textAgentOne} name={userOne} password={passwordOne} email={emailOne}/>
              </div>
              <div className="col-3">
                <CardAgent image={image} labelCardAgent={labelCardAgent} textAgent={textAgentTwo} name={userOne} password={passwordOne} email={emailOne}/>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
};

export default HomePage;



