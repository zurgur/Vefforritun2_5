import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */
const baseurl = process.env.REACT_APP_SERVICE_URL;

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      stats: '',
    }
  }

  componentDidMount() {
    fetch(baseurl + 'stats')
    .then(results => {
      return results.json();
    }).then(data => {
      let stats = Object.entries(data.stats).map((stat) => {
        console.info(stat);
        return(
          <li key={stat} href={stat}>{Object.values(stat)}</li>
        )
      });
      this.setState({stats: stats});
    });
  }

  render() {

    return (
      <div className="home">
        <h1>Tölfræði</h1>
        {this.state.stats}
      </div>
    );
  }
}
