import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Compteur from './components/Compteur';
import Dicton from './components/Dicton';
import Exos from './components/Exos';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(<Exos/>, document.getElementById('nav'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={() => {
        return <>
          <h1>Liste des exercices</h1>
          <Exos />
        </>
      }} />
      <Route path="/compteur" component={Compteur} />
      <Route path="/diction" component={Dicton} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);