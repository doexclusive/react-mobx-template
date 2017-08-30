import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        This is <b>home</b> Component
        <br/>
        <Link to='/time'>Get Time</Link>
        <br/>
        <button onClick={() => this.props.history.push('/time')}>Get Time Button JS</button><br/>
        <button onClick={() => this.props.history.push('/order/775')}>Order 775</button>
      </div>
    );
  }
};

Home.propTypes = {

};