import "./Agregar.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ListatareasItem from "./ListatareasItem";

class Listatareas extends Component {

  renderToDos() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListatareasItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <img
          alt="Nothing was found"
          id="nothing-was-found"
          src="/img/nothing.png"
        />
        <h4>No tienes tareas</h4>
        <p>Para agregar una tarea va a la sección de "Agregar"</p>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchToDos();
  }

  render() {
    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderToDos()}
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

export default connect(mapStateToProps, actions)(Listatareas);