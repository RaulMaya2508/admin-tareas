import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../actions";
import { completeToDo } from "../actions";

var clase_btn1 = "badge badge-pill btn-iniciar ml-2";
var clase_btn2 = "badge badge-pill btn-realizada ml-2";
var clase_btn3 = "badge badge-pill btn-editar ml-2";

class ToDoListItem extends Component {
  handledeleteClick = deleteToDoId => {
    const { deleteToDo } = this.props;
    deleteToDo(deleteToDoId);
  };
    handlecompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;

    return (
        <div className="col-md-4" key="toDoName">
          <div className="card mt-4">
            <div className="card-header text-left">
              <h4 className="gray-color">
                 {todo.title}
              </h4>
            </div>
            <div className="card-body">
              <p className="gray-color text-left"><span className="detalles">Duración</span><span className="fecha">{todo.fecha}</span></p>
              <p className="gray-color duracion mb-0">{todo.duracion}</p>
              <p className="gray-color unidades">{todo.unidad}</p>
              <p className="gray-color">
                {todo.descripcion}
              </p>
              <div className={clase_btn1} >INICIAR</div>
              <div className={clase_btn2} onClick={() => this.handlecompleteClick(todoId)}>REALIZADA</div>
              <div className={clase_btn3}>EDITAR</div>
              <div className="badge badge-pill btn-eleminar ml-2" onClick={() => this.handledeleteClick(todoId)}>ELEMINAR</div>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(null, { deleteToDo, completeToDo})(ToDoListItem);