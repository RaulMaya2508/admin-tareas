import { todosRef } from "../config/firebase";
import { FETCH_TODOS } from "./types";

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const deleteToDo = deleteToDoId => async dispatch => {
  todosRef.child(deleteToDoId).remove();
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).update({ realizado: "1"});
};


export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const realizadoToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};



