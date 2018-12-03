import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router,
  Link, 
  Route, 
=======
import {
  BrowserRouter as Router,
  Link,
  Route,
>>>>>>> 878722301f89782c4fedc51716bb3debada2966e
  Switch } from 'react-router-dom'
import Home from './pages/home.js'
import Result from './pages/result.js'
import './App.css';

class App extends Component {
<<<<<<< HEAD

=======
>>>>>>> 878722301f89782c4fedc51716bb3debada2966e
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
<<<<<<< HEAD
            <Route path = "/" exact component = {Home}/>
            <Route path = "/:searchText" component = {Result} />
=======
            <Route path="/" exact component={Home}/>
            <Route path="/:searchText" component={Result}/>
>>>>>>> 878722301f89782c4fedc51716bb3debada2966e
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;