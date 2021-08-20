import React from 'react';
import BtnNavBarTop from './BtnNavBarTop';
import './Styles/componentsStyle.css';

function NavBarTop({Show}) {
  const labelBtn = 'CAMBIAR PLAN';
  const labelBtnTwo = 'CREAR CAMPAÑA';
  const labelBtnThree = 'COMPRAR LEADS';

  return (  
    <div className="header navbar navBarTop w-100">
      {/* ### $Topbar ### */}
      <div className="header-container d-flex flex-wrap">
        <ul className="nav-left col-4 mx-0 ps-4">
          <li>
            <a className="sidebar-link td-n d-flex justify-content-center align-items-center" href="index.html">
              <h5 className="lh-1 mB-0 logo-text">LEADERA</h5>
            </a>
          </li>
        </ul>
        <ul className="nav-right col-8 d-flex justify-content-end">
          <li className="">
            <BtnNavBarTop labelBtn={labelBtn}/>
          </li>
          <li className="">
            <BtnNavBarTop labelBtn={labelBtnTwo}/>
          </li>
          <li className="">
            <BtnNavBarTop labelBtn={labelBtnThree}/>
          </li>
          <li className="">
            <a href="#" className="">
              <img className="profilePicture bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="Foto de perfil"/>
            </a>
          </li>
        </ul>
      </div>
    </div>   
  );
}

export default NavBarTop;