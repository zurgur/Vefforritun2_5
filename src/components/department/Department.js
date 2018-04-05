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
    tests: PropTypes.array,
    visible: PropTypes.bool,
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
        <p onClick={onHeaderClick} className="note__header">{title}</p>
        {visible && (
          <table>
            <tr>
              <th>Auðkenni</th>
              <th>Námskeið</th>
              <th>Fjöldi</th>
              <th>Dagsetning</th>
            </tr>
            <tbody>
            {(tests).map((test) => (
              <tr key={test.course}>
                <td>{test.course}</td>
                <td>{test.name}</td>
                <td>{test.students}</td>
                <td>{test.date}</td>
              </tr>              
            ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}
