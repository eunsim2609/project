import React, { Component } from 'react';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pokemons from './conponents/Pokemons';
import styles from './App.module.scss';



class Title extends Component {
  render(){
    return (
      <Link to="/pokemons">
        <h1 className={styles.Title}>Pokemon Book</h1>
      </Link>
    )
  }
}



class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
        <Route path="/"> 
        <div className="stars">
          <div className="twinkling" />
        </div>
        <Title></Title>
        </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
