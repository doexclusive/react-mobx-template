import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from 'components/Home';
import TimeWrapper from 'components/TimeWrapper';
import Order from 'components/Order';

export default class Main extends React.Component {
  render() {
    return (
      <div>
      	<Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={TimeWrapper}/>
          <Route exact path='/order/:orderId' component={Order}/>
        </Switch>
      </div>
    );
  }
};