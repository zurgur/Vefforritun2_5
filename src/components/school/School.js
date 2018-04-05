import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom'


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
      this.setState({data: data, loading: false});
    });
  }

  render() {
    
    if(this.state.loading){
      return (
        <main className="app">
          <Helmet title="Sækir gögn" />
          <h1>Sækir gögn ... </h1>
        </main>
      )
    }
    if(this.state.error){
      return(
        <main className="app">
          <Helmet title="Villa við að sækja gögn" />
          <h1>Villa kom upp ... </h1>
        </main>
      );
    }
    const heding = this.state.data.school.heading;

    return (
      <section className="school">
      <Helmet title={ `${heding} - próftöflur`} />
        <h1> {heding} </h1>
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
      <p><NavLink to="/">Heim</NavLink></p>
      </section>
    );
  }
}
