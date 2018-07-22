import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// Importamos nuestros componentes
import Inicio from './components/Inicio';
import Agregar from './components/Agregar';
import Navigation from './components/Navigation';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Inicio} />
          <Route exact path="/agregar" component={Agregar} />
        </div>
      </Router>
    );
  }
}

export default App;