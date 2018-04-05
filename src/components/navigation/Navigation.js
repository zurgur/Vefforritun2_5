import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


// import PropTypes from 'prop-types';

import './Navigation.css';


export default class Navigation extends Component {
  
  static propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    slug: PropTypes.string,
  }

  
  render() {
    const { slug } = this.props.info;
    const boi = this.props.info;
    
    return (
      <nav className="navigation">
        <h1>Próf töflur</h1>
        <nav className="links">
          {boi.map((soy) => (
            <p key={soy.name} ><NavLink to={soy.slug} name={soy.name}>{soy.name}</NavLink></p>
          ))}
          {slug}
        </nav>
      </nav>
    );
  }
}
