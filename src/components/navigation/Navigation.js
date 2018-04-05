import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


// import PropTypes from 'prop-types';

import './Navigation.css';

const baseurl = process.env.REACT_APP_SERVICE_URL;

export default class Navigation extends Component {
  
  static propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    slug: PropTypes.string,
  }

  
  render() {
    const { name, link, slug } = this.props.info;
    console.info(this.props.info);
    const boi = this.props.info;
    
    return (
      <nav className="navigation">
        <h1>Próf töflur</h1>
        <nav className="links">
          {boi.map((soy) => (
            <p key={soy.name} ><NavLink to={soy.slug}>{soy.name}</NavLink></p>
          ))}
          {slug}
        </nav>
      </nav>
    );
  }
}
