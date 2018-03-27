import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */
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
        return(
          <a key={sug.name} href={sug.slug}>{sug.name}</a>
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
