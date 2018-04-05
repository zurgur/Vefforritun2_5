import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './School.css';
import Department from '../department'


const baseurl = process.env.REACT_APP_SERVICE_URL;


/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */


export default class School extends Component {

  state = {
    data: null,
    loading: true,
    error: false,
    visable: null,
  }

  onHeaderClick = (heading) => {
    return (e) => {
      const visible = this.state.visible === heading ? null : heading;
      this.setState({ visible });
    }
  }
  
  componentDidMount() {
    this.setState({ loading: true});

    const { match } = this.props;
    fetch(baseurl + match.params.about)
    .then(results => {
      return results.json();
    }).then(data => {
      
      this.setState({ data: data, loading: false});
    });
  }
  componentWillReceiveProps() {
    this.setState({ loading: true});

    const { match } = this.props;
    fetch(baseurl + match.params.about)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({data: data});
    });
  }

  render() {
    
    const { match, data } = this.props;
    const palce = match.params.about;
    if(this.state.loading){
      return (
        <h1>loading ...x</h1>
      )
    }
    if(this.state.error){
      return(
        <main className="app">
          <h1>Villa kom upp ... </h1>
        </main>
      );
    }
    return (
      <section className="school">
        <h1> {palce} </h1>
        {(this.state.data.school).departments.map((st) => (
          <li key={st.heading}> 
            <Department
            title={st.heading}
            tests={st.tests}
            visible={this.state.visible === st.heading}
            onHeaderClick={(this.onHeaderClick(st.heading))}
            />
        </li>)
      )}
      </section>
    );
  }
}
