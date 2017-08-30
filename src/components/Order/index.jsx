import React from 'react';

export default class Order extends React.Component {
  render() {
    return (
      <div>
        Your order number is: <b>{this.props.match.params.orderId}</b>
      </div>
    );
  }
};