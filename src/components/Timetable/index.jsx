import React from 'react';
import {observer, inject} from 'mobx-react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

@inject('timerStore')
@withRouter
@observer
export default class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    const {timer, resetTimer} = this.props.timerStore;
    return (
      <div>
        Hi Guys!<br/>
        Seconds passed: Seconds passed: {timer}<br/>
        <button onClick={resetTimer}>Reset Timer</button><br/>
        <button onClick={this.goHome}>Go To Main Page</button>
      </div>
    );
  }
};
