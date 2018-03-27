import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */
const baseurl = process.env.REACT_APP_SERVICE_URL;

export default class Navigation extends Component {
  
  render() {
    fetch(baseurl)
    .then(results => {
      return results.json();
    }).then(data => {
      data.schools.map((sug) => {
        console.info(sug.slug);
      });
    });
    return (
      <nav className="navigation">
        <h1>Próf töflur</h1>
        <nav className="links">
          <a href= '/felagsvisindasvid'>Félagsvísindasvið </a>
          <a href= '/heilbrigdisvisindasvid'>Heilbrigðisvísindasvið </a>
          <a href= '/hugvisindasvid'>Hugvísindasvið </a>
          <a href= '/menntavisindasvid'>Menntavísindasvið </a>
          <a href= '/verkfraedi-og-natturuvisindasvid'>Verkfæði- og Nátturuvísindasvið </a>
        </nav>
      </nav>
    );
  }
}
