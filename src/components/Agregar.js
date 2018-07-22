import "./Agregar.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";

// Importamos nuestros componentes
import Head from './Head';

const duraciones = [ 'Corta', 'Media', 'Larga', 'Definir' ]

class Agregar extends Component {
  state = {
    addFormVisible: false,
    addFormValue: "",
    addFormValue2: "",
    addFormValue3: "",
    addFormValue4: "",
    hecho: "0",
    tiempod: "30",
    unidadt: "min. o menos"
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleInputChange2 = event => {
    this.setState({ addFormValue2: event.target.value });
  };
  
  handleInputChange3 = event => {
    this.setState({ addFormValue3: event.target.value });
  };

  handleInputChange4 = event => {
    this.setState({ addFormValue4: event.target.value });
    (() => {
                  switch (event.target.value) {
                    case "Corta":   return this.setState({ tiempod: "30" }), this.setState({ unidadt: "min. o menos" });
                    case "Media":   return this.setState({ tiempod: "45" }), this.setState({ unidadt: "min. o 1hr" });
                    case "Larga":   return this.setState({ tiempod: "1" }), this.setState({ unidadt: "hr. o más" });
                    default:      return this.setState({ hecho: "30" }), this.setState({ unidadt: "min. o menos" });
                  }
              })()
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addFormValue2 } = this.state;
    const { addFormValue3 } = this.state;
    const { addFormValue4 } = this.state;
    const { hecho } = this.state;
    const { tiempod } = this.state;
    const { unidadt } = this.state;
    const { realizado } = "0"
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ 
    	title: addFormValue, 
    	descripcion: addFormValue2, 
    	fecha: addFormValue3, 
    	tiempo: addFormValue4, 
    	realizado: hecho,
    	duracion: tiempod,
    	unidad: unidadt
    });
    this.setState({ addFormValue: "", addFormValue2: "", addFormValue3: "", addFormValue4: ""});
  };

  renderAddForm = () => {
    const { addFormValue, addFormValue2, addFormValue3, addFormValue4 } = this.state;
      return (
		        <div id="todo-add-form" className="col-md-10 cont-form-add">
		          <form onSubmit={this.handleFormSubmit}>

		          	 <div className="form-row pt-3 pb-3">
					    <div className="col-md-12 mb-3 text-left">
					      <label className="gray-color label-input">Título</label>
					      <input
					      	className="form-control"
					      	placeholder="Título"
			                value={addFormValue}
			                onChange={this.handleInputChange}
			                id="titulo"
			                type="text"
			                required
			              />
					    </div>
					    <div className="col-md-12 mb-3 text-left">
					      <label className="gray-color label-input">Descripción</label>
					      <input
					      	className="form-control"
					      	placeholder="Descripción"
			                value={addFormValue2}
			                onChange={this.handleInputChange2}
			                id="descripcion"
			                type="text"
			                required
			              />
					    </div>
					    <div className="col-md-12 mb-3 text-left">
					      <label className="gray-color label-input">Fecha</label>
					      <input
					      	className="form-control"
			                value={addFormValue3}
			                onChange={this.handleInputChange3}
			                id="fecha"
			                type="date"
			                required
			              />
					    </div>
					    <div className="col-md-12 mb-3 text-left">
					      <label className="gray-color label-input">Duración</label>
					      <select className="form-control" value={addFormValue4} onChange={this.handleInputChange4}>
				            {duraciones.map(duracionesOption =>
				              <option value={duracionesOption} key={duracionesOption}>{duracionesOption}</option>)}
				          </select>
					    </div>

		              <input type="submit" value="Guardar" className="btn-send"/>
		            </div>
		          </form>
		          
		        </div>

      );
  };


  render() {
    return (
      <div className="App">
		<Head titulo="Agregar Tarea" />
		<div className="container">
          {this.renderAddForm()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Agregar);