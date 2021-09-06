import React, {Component} from 'react';
import '../../Pages/Styles/homePage.css';
import '../../assets/styles/index.scss';
import '../../assets/scripts/index.js';
import '../../assets/static/fonts/icons/themify/themify.eot';
import NavBarLeft from '../../components/NavBarLeft.js';
import NavBarTop from '../../components/NavBarTop.js';
import BtnMain from '../../components/BtnMain.js';
import CardMain from '../../components/CardMain.js';
import CardMainThree from '../../components/CardMainThree.js';
import CardMainTwo from '../../components/CardMainTwo';
import Carousel from '../../components/Carousel.js';
import BtnSelect from '../../components/BtnSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import imgPhono from '../../images/imagePhono.png';

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
    const labelBtnFour = 'CAMBIAR ANUNCIO';

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

    const textThree = "100";
    const textFour="$1.200";
    const textFive = "45";
    const textSix="30";
    const textSeven="15";
    const textEigth="$950";
    const textNine="5k";
    const textTen="1.5k";
    const textEleven="20%";

    const listCampaign = ["15 de Junio 2021 - 30 de junio 2021", "16 de Junio 2021 - 30 de junio 2021", "17 de Junio 2021 - 30 de junio 2021"];


    return (
      <div>
        <NavBarTop Show={this.Show}/>
        <div className="app" id='app'>
          <NavBarLeft show={this.state.show} Show={this.Show} Hide={this.Hide}/>
          <main className="container d-fluid pe-4 py-5 mainContainer" id="containerMain">
            {/* Section: Plan */}
            <div className="row">
              <div className="col-12 col-md-8 px-4">
                <h1>CONVERSIONES</h1>
              </div>
              <div className="col-12 col-md-4">
                <BtnSelect listCampaign={listCampaign}/>                 
              </div>              
            </div>
            {/* Section:  Campaign*/}      
            <div className="row mt-2">              
              <div className="col-12 col-lg-8 d-flex flex-wrap">      
                <div className="col-12 col-md-6">
                  <p className='text-hyphens my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
                </div>        
                <div className="col-12 col-sm-6 mt-3 ">
                  <CardMain labelCardMain={labelCardMainTwo} textOne={textThree} />
                </div>
                <div className="col-12 col-sm-6 col-md-12 mt-3 ">
                  <CardMain labelCardMain={labelCardMainThree} textOne={textFour}/>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
                <div className="col-12 mt-4 mt-md-3">
                  <CardMainTwo labelCardMainOne={labelCardMainFour} labelCardMainTwo={labelCardMainFive} labelCardMainThree={labelCardMainSix} textOne={textFive} textTwo={textSix} textThree={textSeven}/>
                </div>
                <div className="col-12 mt-4 mt-md-3">
                  <CardMain labelCardMain={labelCardMainSeven} textOne={textEigth}/>
                </div>  
              </div>              
            </div>
            <div className="row mt-5">              
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <Carousel imgPhono={imgPhono}/>
              </div>
              <div className="col-12 col-md-6">
                <a className="d-flex justify-content-start justify-content-md-end mt-3 mt-md-0" href="/">
                  <BtnMain labelBtn={labelBtnFour} />
                </a>
                <div className="col-12 mt-4">
                  <h2>ANUNCIO</h2>
                  <h5 className="mt-3 mt-md-2"><FontAwesomeIcon className="" icon={faCircle} />15 días activo</h5>
                  <p className='text-hyphens my-3 my-md-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultricies erat. Suspendisse aliquet risus id purus blandit, ac posuere augue tempus. Suspendisse orci dolor,aliquet sit amet pellentesque</p>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="col-6 p-5">
                    <CardMainThree>
                      <h5>{labelCardMainEight}</h5>
                      <div className="d-flex"><FontAwesomeIcon className="fs-1 me-2" icon={faFacebook} /><FontAwesomeIcon className="fs-1" icon={faInstagram} /></div>
                    </CardMainThree>
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
          </main>
        </div>
      </div>
    )
  }
};

export default Conversations;



