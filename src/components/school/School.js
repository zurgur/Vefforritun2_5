import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <li key={st.heading} >{st.heading}</li>
        )
      });
      this.setState({stuff: stuff});
    });
  }

  render() {
    return (
      <section className="school">
          {this.state.stuff}
      </section>
    );
  }
}
