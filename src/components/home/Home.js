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
        return(
          <tr key ={stat}>
            <td>{stat[0]}</td>
            <td>{stat[1]}</td>
          </tr>
        )
      });
      this.setState({stats: stats});
    });
  }

  render() {

    return (
      <div className="home">
        <h1>Tölfræði</h1>
        <table>
          <tbody>
            {this.state.stats}
          </tbody>
        </table>
      </div>
    );
  }
}
