import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Importamos nuestros componentes
import Head from './Head';
import Listatareas from './Listatareas';

class Inicio extends Component {
	render(){
		return(
			<div className="App">
		    	<Head titulo="Tareas" />
		    	<div className="container">
		    	  <Listatareas/>
		    	</div>
		    </div>
			);
	}
}

Inicio.PropTypes = {

};

export default Inicio;