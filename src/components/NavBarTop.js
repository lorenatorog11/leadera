import React from 'react';
import BtnNavBarTop from './BtnNavBarTop';
import './Styles/componentsStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


function NavBarTop({Show}) {
  const labelBtn = 'CAMBIAR PLAN';
  const labelBtnTwo = 'CREAR CAMPAÑA';
  const labelBtnThree = 'COMPRAR LEADS';

  return (  
    <div className="header navbar navBarTop w-100">
      {/* ### $Topbar ### */}
      <div className="header-container d-flex flex-wrap">
        <ul className="nav-left col-6 col-lg-4 mx-0 ps-4 d-flex align-items-center">
          <li className="d-lg-none">
            <button id='sidebar-toggle' className="sidebar-toggle bg-transparent" onClick={Show}>
              <i className="ti-menu"></i>
            </button>
          </li>
          <li>
            <a className="sidebar-link td-n d-flex justify-content-center align-items-center" href="/">
              <h5 className="lh-1 mB-0 logo-text">LEADERA</h5>
            </a>
          </li>
        </ul>
        <div className="navbar navbar-expand-lg col-5 col-lg-7">
          <div className="container-fluid">
            <button className="navbar-toggler ms-auto m-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon className="text-white" icon={faSortDown} /> 
            </button>
            <div className="collapse navbar-collapse w-100 navBarTopCollapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-between">
                <li className="nav-item rounded">
                  <BtnNavBarTop labelBtn={labelBtn}/>
                </li>
                <li className="nav-item rounded">
                  <BtnNavBarTop labelBtn={labelBtnTwo}/>
                </li>
                <li className="nav-item rounded">
                  <BtnNavBarTop labelBtn={labelBtnThree}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav-right col-1 d-flex justify-content-end align-items-center">
          <li className="">
              <img className="profilePicture w-100 rounded-circle" src="https://randomuser.me/api/portraits/men/10.jpg" alt="Foto de perfil"/>
          </li>
        </ul>
      </div>
    </div>   
  );
}

export default NavBarTop;