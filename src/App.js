import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Switch, NavLink } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';
const baseurl = process.env.REACT_APP_SERVICE_URL;


class App extends Component {
  state = {data: null, loading: true, error: false};

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      console.info(data);

      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const url = process.env.REACT_APP_SERVICE_URL;
    const response = await fetch(url);

    const data = await response.json();
    return data;
  }

  
  
  render() {
    const {data, loading, error} = this.props;
    const { match } = this.props;
    if(this.state.loading){
      return(
        <main className="app">
          <h1>sækir gögn ... </h1>
        </main>
      );
    }
    if(this.state.error){
      return(
        <main className="app">
          <h1>Villa kom upp ... </h1>
        </main>
      );
    }
    return(
      <main className="app">
        <Navigation info={this.state.data.schools}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:about" component={School}  />
          <Route component={NotFound} />
        </Switch>
        <p><NavLink to="/">Heim</NavLink></p>
    </main>
  );
  }
}

export default App;
