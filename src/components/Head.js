import React, { Component } from 'react';
import './Head.css';

import Filtrofecha from './Filtrofecha';
import Filtroduracion from './Filtroduracion';

// Generamos la clase para la cabecera de cada sección
class Head extends Component {

	render(){
		return(
			<div className="container-fluid cont-head">
        <div className="row justify-content-center">
          <div className="col-md-10 border-bottom-head text-left info-head">
            { this.props.titulo }
             {(() => {
                  switch (this.props.titulo) {
                    case "Tareas":   return <div className="cont-selects"> <Filtroduracion /> <Filtrofecha /></div>;
                    default:      return "";
                  }
              })()}
          </div>
        </div>
      </div>
		);
	}
}

export default Head