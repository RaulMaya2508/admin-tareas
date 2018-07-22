import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../logo.svg';
import mneu_icon from '../menu.svg';
import './Navigation.css';


class Navigation extends Component {
    handleopenClick = handleopenClick => {
    var element = document.getElementById("menu-movil");
                 element.classList.toggle("open-menu");
  };
	render(){
		return(
      <div>
    			<nav className="navbar fixed-top navbar-dark bg-dark backgrd-blue">
              <Link className="nav-link active" to="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt=""/>
                <span className="tit-menu-left">Administrador de Tareas</span>
              </Link>
              <ul className="nav">
              <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Inicio
                  </Link>
                </li>
              	<li className="nav-item">
              		<Link className="nav-link active" to="/agregar">
              			Agregar
              		</Link>
              	</li>
              </ul>
              <div className="cont-m-m" onClick={() => this.handleopenClick()}>
              <img src={mneu_icon} width="20" className="menu-movil" alt="" />
              </div>
            </nav>
            <div className="cont-nav-movil" id="menu-movil">
              <ul className="nav-mov">
              <li className="nav-item-mov">
                  <Link className="nav-link active" to="/" onClick={() => this.handleopenClick()}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item-mov">
                  <Link className="nav-link active" to="/agregar" onClick={() => this.handleopenClick()}>
                    Agregar
                  </Link>
                </li>
              </ul>
            </div>
      </div>
		);
	}
}

export default Navigation;