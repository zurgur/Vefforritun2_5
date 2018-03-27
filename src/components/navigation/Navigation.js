import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <h1>Próf töflur</h1>
        <nav className="links">
          <a href= ''>Félagsvísindasvið </a>
          <a href= ''>Heilbrigðisvísindasvið </a>
          <a href= ''>Hugvísindasvið </a>
          <a href= ''>Menntavísindasvið </a>
          <a href= ''>Verkfæði- og Nátturuvísindasvið </a>
        </nav>
      </nav>
    );
  }
}
