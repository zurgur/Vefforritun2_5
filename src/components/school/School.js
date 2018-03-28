import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './School.css';

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */


export default class School extends Component {

  render() {
    const { match } = this.props;
    const about = match.params.about;
    console.info(about);
    return (
      <section className="school">
        <p>útfæra</p>
      </section>
    );
  }
}
