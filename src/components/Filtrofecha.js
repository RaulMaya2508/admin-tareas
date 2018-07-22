import React, { Component } from 'react';
import './Filtros.css';

// Generamos la clase del filtreo
class Filtrofecha extends Component {

	render(){
		return(
			<div className="cont-fecha-select">
        <select className="select-head" id="exampleSelect1">
          <option selected disabled>Fecha de creación</option>
        </select> 
      </div>
		);
	}
}

export default Filtrofecha