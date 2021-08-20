import React from 'react';
import './Styles/componentsStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faCommentDots, faChartLine, faUser, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

function NavBarLeft({show, Show}) {
  return (
    <div className="sidebar">
      {/* #Left Sidebar ==================== */}
      <div className="sidebar-inner btnNavBarTop">
        {/* ### $Sidebar Menu ### */}
        <ul className="sidebar-menu scrollable pos-r">
          <li className="nav-item mT-30 actived menuActive">
            <a className="sidebar-link" href="index.html">
              <span className="icon-holder">
                <FontAwesomeIcon className="backgroundIcon" icon={faHome} />
              </span>
              <span className="title">Inicio</span>
            </a>
          </li>
          <li className="nav-item dropdown mT-10">
            <a data-bs-toggle="collapse" href="#collapseBtn" role="button" aria-expanded="false" aria-controls="collapseBtn">
              <span className="arrow">
                <FontAwesomeIcon className="backgroundIcon" icon={faCaretRight} />
              </span>
              <span className="icon-holder">
                <FontAwesomeIcon className="backgroundIcon" icon={faCog} />
              </span>
              <span className="title">Cuenta</span>
            </a>
            <ul className="collapse dropdown-menu" id="collapseBtn">
              <li className="ps-2">
                <a className='sidebar-link' href="basic-table.html">Plan</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="datatable.html">Campaña</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="basic-table.html">Perfil</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="datatable.html">Facturación</a>
              </li>
            </ul>
          </li>
          <li className="nav-item mT-10">
            <a className="sidebar-link" href="index.html">
              <span className="icon-holder">
                <FontAwesomeIcon className="backgroundIcon" icon={faCommentDots} />
              </span>
              <span className="title">Agentes</span>
            </a>
          </li>
          <li className="nav-item mT-10 dropdown">
            <a data-bs-toggle="collapse" href="#collapseBtnTwo" role="button" aria-expanded="false" aria-controls="collapseBtnTwo">
              <span className="arrow">
                <FontAwesomeIcon className="backgroundIcon" icon={faCaretRight} />
              </span>
              <span className="icon-holder">
                <FontAwesomeIcon className="backgroundIcon" icon={faChartLine} />
              </span>
              <span className="title">Métricas</span>
            </a>
            <ul className="collapse dropdown-menu" id="collapseBtnTwo">
              <li className="ps-2">
                <a className='sidebar-link' href="basic-table.html">Campañas</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="datatable.html">Conversaciones</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="basic-table.html">Nuevos vs recurrentes</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="datatable.html">Audiciencia</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="basic-table.html">Geográfico</a>
              </li>
              <li className="ps-2">
                <a className='sidebar-link' href="datatable.html">Conversaciones</a>
              </li>
            </ul>
          </li>
          <li className="nav-item mT-10">
            <a className="sidebar-link" href="index.html">
              <span className="icon-holder">
                <FontAwesomeIcon className="backgroundIcon" icon={faUser} />
              </span>
              <span className="title">Leads</span>
            </a>
          </li>
        </ul>
        <div className="navArrowShow mT-10 border-top border-dark">
          <a><button id='' className="w-100 h-100 border-0 bg-transparent text-end" onClick={Show}>
            {show ? <FontAwesomeIcon className="backgroundIcon" icon={faArrowAltCircleLeft} /> : <FontAwesomeIcon className="backgroundIcon" icon={faArrowAltCircleRight}/>}
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default NavBarLeft;