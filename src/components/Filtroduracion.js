import React, { Component } from 'react';
import './Filtros.css';

// Generamos la clase del filtreo
class Filtroduracion extends Component {

	render(){
		return(
			<div className="cont-fecha-select">
        <select className="select-head" id="exampleSelect1">
          <option disabled selected>Duración de la Tarea</option>
        </select> 
      </div>
		);
	}
}

export default Filtroduracion