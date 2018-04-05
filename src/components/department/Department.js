import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Department.css';

/**
 * Þessi component ætti að vera einfaldur í birtingu en taka fall frá foreldri
 * sem keyrir þegar smellt er á fyrirsögn.
 */

export default class Exams extends Component {
  static propTypes = {
    title: PropTypes.string,
    tests: PropTypes.string,
    visible: PropTypes.bool,
    datetime: PropTypes.string,
    onHeaderClick: PropTypes.func,
  }

  static defaultProps = {
    visible: true,
    onHeaderClick: () => {},
  }

  render() {
    const { onHeaderClick, title, visible, tests } = this.props;

    return (
      <section className="department">
        <p>útfæra</p>
      </section>
    );
  }
}
