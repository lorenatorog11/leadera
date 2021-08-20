import React, {Component} from 'react';
import '../Pages/Styles/Initial.css';
import '../assets/styles/index.scss';
import '../assets/static/fonts/icons/themify/themify.eot';
import { Link } from 'react-router-dom';
import Input from '../components/Input.js';
import InputPassword from '../components/InputPassword';
import Btn from '../components/Btn.js';
import logo from '../images/logo.png';
import background from '../images/bg.jpg';


class Initial extends Component {
  render (){
    const label = 'Nombre de usuario';
    const type = 'text';
    const placeholder = '';
    const labelPassword = 'Contraseña';
    const placeholderPassword = '';
    const labelBtn = 'ENTRAR';
    // window.addEventListener('load', function load() {
    //   const loader = document.getElementById('loader');
    //   setTimeout(function() {
    //     loader.classList.add('fadeOut');
    //   }, 300);
    // });
    return (
      <div className="app">
        <div className="peers ai-s fxw-nw h-100vh">
          <div className="col-12 col-md-4 peer pX-40 pY-100 h-100 bgc-white scrollable pos-r" style={{minWidth: '320px'}}>
            <h2 className="fw-bold c-grey-900 mY-40">INGRESO</h2>
            <form>
              <div className="mb-3">
                <Input label={label} type={type} placeholder={placeholder}/>
              </div>
              <div className="mb-3">
                <InputPassword labelPassword={labelPassword} placeholderPassword={placeholderPassword}/>
              </div>
              <div className="col-12 p-0 my-4">
                <div className="peers col-12 ai-c jc-sb fxw-nw">
                <Link to='/home-page' className='d-flex w-100'><Btn labelBtn={labelBtn}/></Link>
                </div>
              </div>
              <div className="col-12 p-0 my-4">
                <Link to='/remember-user'><button className='col-6 lickForget' href='#'>Olvidaste tu usuario?</button></Link>
                <Link to='/remember-password'><button className='col-6 lickForget' href='#'>Olvidaste tu contraseña?</button></Link>
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

export default Initial;