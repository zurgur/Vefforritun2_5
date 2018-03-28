import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Switch, NavLink } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  state = {data: null, loading: true, error: false};
  
  render() {
    const {data, loading, error} = this.props;
    
    return(
      <main className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:about" component={School} />
          <Route component={NotFound} />
        </Switch>
        <p><NavLink to="/">Heim</NavLink></p>
    </main>
  );
  }
}

export default App;
