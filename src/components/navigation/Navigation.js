import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';

import './Navigation.css';

const baseurl = process.env.REACT_APP_SERVICE_URL;

export default class Navigation extends Component {
  
  constructor() {
    super();
    this.state = {
      slug: '',
    }
  }
  state = {data: null, loading: true, error: false};

  /*handleClick = (id) => {
    return e => {
      this.setState({data: id, loading: true});
      console.log(id);
    }
  }*/
  
  componentDidMount() {
    fetch(baseurl)
    .then(results => {
      return results.json();
    }).then(data => {
      let slug = data.schools.map((sug) => {
        let s = sug.slug;
        return(
          <a key={sug.name} ><NavLink to={'school/' + s}>{sug.name}</NavLink></a>
        )
      });
      this.setState({slug: slug});
    });
  }

  render() {
    
    return (
      <nav className="navigation">
        <h1>Próf töflur</h1>
        <nav className="links">
          
          {this.state.slug}
        </nav>
      </nav>
    );
  }
}
