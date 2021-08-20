import React, {Component} from 'react';
import '../assets/styles/index.scss';
import '../assets/static/fonts/icons/themify/themify.eot';
import { Link } from 'react-router-dom';
import InputPassword from '../components/InputPassword';
import Btn from '../components/Btn.js';
import logo from '../images/logo.png';
import background from '../images/bg.jpg';

class RememberPassword extends Component {
  render (){
    const labelPassword = 'Nueva contraseña';
    const placeholderPassword = '';
    const labelPasswordTwo = 'Ingresa de nuevo la contraseña';
    const placeholderPasswordTwo = '';
    const labelBtn = 'REINICIAR CONTRASEÑA';

    return (
      <div className="app">
        <div className="peers ai-s fxw-nw h-100vh">
          <div className="col-12 col-sm-5 peer pL-40 pR-160 pY-100 h-100 bgc-white scrollable pos-r" style={{minWidth: '320px'}}>
            <h2 className="fw-bold c-grey-900 mT-40 lh-sm">REINICIA TU CONTRASEÑA</h2>
            <p className="mY-30 lh-sm hyphens">Reinicia tu contraseña para poder acceder a los servicios de Leadera</p>
            <form>
              <div className="mb-3">
                <InputPassword labelPassword={labelPassword} placeholderPassword={placeholderPassword}/>
              </div>
              <div className="mb-3">
                <InputPassword labelPassword={labelPasswordTwo} placeholderPassword={placeholderPasswordTwo}/>
              </div>
              <div className="col-12 p-0 my-4 d-flex justify-content-between">
                <div className="peers ai-c jc-sb fxw-nw col-8">
                  <Btn labelBtn={labelBtn}/>
                </div>
                <div className="col-4 p-0 my-4 col-4">
                  <Link to='/'><button className='col-12 lickForget' href='#'>Volver al ingreso</button></Link>
                </div>
              </div>
            </form>
          </div>
          <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: `url(${background})`}}>
            <div className="pos-a centerXY">
              <div className="bgc-white bdrs-50p pos-r" style={{width: '120px', height: '120px'}}>
                <img className="pos-a centerXY" src={logo} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RememberPassword;