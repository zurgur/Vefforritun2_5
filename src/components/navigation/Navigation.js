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
  
  componentDidMount() {
    fetch(baseurl)
    .then(results => {
      return results.json();
    }).then(data => {
      let slug = data.schools.map((sug) => {
        let s = sug.slug;
        return(
          <p key={sug.name} ><NavLink to={s}>{sug.name}</NavLink></p>
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
