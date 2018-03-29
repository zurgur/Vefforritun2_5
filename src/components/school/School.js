import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './School.css';
const baseurl = process.env.REACT_APP_SERVICE_URL;

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */


export default class School extends Component {

  constructor() {
    super();
    this.state = {
      stuff: '',
      data: null,
    }
  }
  
  componentDidMount() {
    const { match } = this.props;
    fetch(baseurl + match.params.about)
    .then(results => {
      return results.json();
    }).then(data => {
      let stuff = data.school.departments.map((st) => {
        return(
          <li key={st.heading}> 
          <NavLink to={st.heading} >{st.heading} </NavLink>
          </li>
        )
      });
      this.setState({stuff: stuff, data: data});
    });
  }

  render() {
    const { match } = this.props;
    const palce = match.params.about;
    this.componentDidMount();
    return (
      <section className="school">
        <h1> {palce} </h1>
          {this.state.stuff}
      </section>
    );
  }
}
